const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src'); // Adjust the directory path as needed
const outputFile = path.join(__dirname, 'fileList.txt'); // Output file location

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

function writeFilesToOutput(arrayOfFiles, outputFile) {
    const fileContents = arrayOfFiles.map((filePath) => {
        const content = fs.readFileSync(filePath, 'utf8');
        return `File: ${filePath}\n\n${content}\n\n====================\n\n`;
    }).join('');

    fs.writeFileSync(outputFile, fileContents, 'utf8');
}

const arrayOfFiles = getAllFiles(directoryPath);
writeFilesToOutput(arrayOfFiles, outputFile);

console.log(`File list and contents written to ${outputFile}`);
