var filePath = 'D:/javaStudy/Nodejs/Projects/npmrc';
const fs = require('fs');

exports.readingFileController = (req, res, next) => {
    
    var contents = fs.readFileSync(filePath, 'utf8');
    var content = JSON.stringify(contents);
    var data = JSON.parse(content);
    console.log(data);
    res.status(200).json({
        fileData: {
            content: data
        },
    });
};