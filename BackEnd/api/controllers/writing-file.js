var filePath = 'D:/javaStudy/Nodejs/Projects/npmrc';
const fs = require('fs');

exports.writingFileController = (req, res, next) => {
    fs.writeFile(filePath, req.params.data, function (err) {
        if (err)
            res.status(500).json({
                fileData: {
                    content: 'Error While Writing File ' + err
                },
            })
        else
            res.status(200).json({
                fileData: {
                    content: 'Writing Completed'
                },
            });

    });
};