# Project name - Text File Analysis System

In this assignment, we can upload only text file and perform the operation like count all words, count unique words and count the which word comes how many time in our file.

## Installation

first you clone the assignment frpm the github repo - 'https://github.com/Apple7856/Text-File-Analysis-System.git'
then after you run the command 'npm install'
then after you run the command 'npm start'
done!

# Api end point

## 1. upload POST api - 'http://localhost:8800/data/api/v1/upload'

In the body section choose the form-data and keep the file name 'text-file' and select mode 'file'.

### responce -

{
"newFile": {
"fileName": "1705449143366-topic-time.txt",
"filePath": "file-storage/1705449143366-topic-time.txt",
"url": "http://localhost:8800/files/1705449143366-topic-time.txt",
"\_id": "65a716b7c2c9930694dbb5b8",
"createdAt": "2024-01-16T23:52:23.375Z",
"updatedAt": "2024-01-16T23:52:23.375Z",
"\_\_v": 0
}
}

## 2. countWords GET api - 'http://localhost:8800/data/api/v1/analysis?fileId=65a716b7c2c9930694dbb5b8&search=countWords'

In query params you can pass fileId and search query is fixed pls don't change.

### responce -

{ "countWords": 39 }

## 3. countUniqueWords GET api - 'http://localhost:8800/data/api/v1/analysis?fileId=65a716b7c2c9930694dbb5b8&search=countUniqueWords'

In query params you can pass fileId and search query is fixed pls don't change.

### responce -

{ "countUniqueWords": 28 }

## 4. findTopKWords GET api - 'http://localhost:8800/data/api/v1/analysis?fileId=65a716b7c2c9930694dbb5b8&search=xyz'

In query params you can pass fileId and in search query you can pass {k} like any words.

### responce -

{ "findTopKWords": 2 }

## done
