const File = require("../models/File");
const fs = require("fs");
const path = require("path");

const fetchFile = async (req, res) => {
  try {
    const { fileId, search } = req.query;
    const fileData = await File.findById(fileId);
    if (!fileData) return res.status(400).send({ error: "Invalid fileId!" });
    const filePath = path.join(__dirname, `../../${fileData.filePath}`);
    let data = await fs.readFileSync(filePath, "utf8");
    data = data.split(" ");
    switch (search) {
      case "countWords":
        res.status(200).send({ countWords: data.length });
        break;
      case "countUniqueWords":
        res.status(200).send({ countUniqueWords: [...new Set(data)].length });
        break;
      default:
        let count = 0;
        for (let value of data) {
          if (search === value) {
            count += 1;
          }
        }
        res.status(200).send({ findTopKWords: count });
        break;
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { fetchFile };
