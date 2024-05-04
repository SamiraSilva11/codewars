const fs = require('fs');
const path = require('path');

// Function to create a folder with the same name as the file
function createFolder(filePath) {
    const folderName = path.basename(filePath, path.extname(filePath));
    const folderPath = path.join(path.dirname(filePath), folderName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
    return folderPath;
}

// Function to move a file to a folder and rename it
function moveAndRenameFile(sourcePath, destinationPath) {
    const fileName = 'code.js';
    const newFilePath = path.join(destinationPath, fileName);
    fs.renameSync(sourcePath, newFilePath);
}

// Function to create a README.md file in a folder if it doesn't exist
function createReadmeFile(folderPath) {
    const readmePath = path.join(folderPath, 'README.md');
    if (!fs.existsSync(readmePath)) {
        fs.writeFileSync(readmePath, '# README\n\nThis is the README file.');
    }
}

// Function to process files recursively in a directory
function processFiles(directory) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) {
            processFiles(filePath); // Recursively process subdirectories
        } else if (path.extname(file) === '.js') {
            const folderPath = createFolder(filePath);
            moveAndRenameFile(filePath, folderPath);
            createReadmeFile(folderPath);
        }
    });
}

// Start processing files from the current directory
processFiles('./');
