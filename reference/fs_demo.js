const fs = require('fs');
const path = require('path');

// Create folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if(err) throw err;
    console.log('Folder created...');
});
*/


fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...');
});

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world whatever\n', err => {
    if(err) throw err;
    console.log('File written to...');
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love JavaScript', err => {
    if(err) throw err;
    console.log('File written to...');
});

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});
