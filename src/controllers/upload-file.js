const File = require("../models/File");

const uploadFile = async (req, res) => {
  try {
    if (!req.file)
      return res.status(404).send({ msg: "Only text file allowed!" });
    const { filename, path, destination } = req.file;
    const newFile = new File({
      fileName: filename,
      filePath: `${path.replace(/\\/g, "/")}`,
      url: `http://localhost:8800/files/${filename}`,
    });
    await newFile.save();
    res.status(200).send({ newFile });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = uploadFile;
