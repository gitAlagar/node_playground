let fs = require('fs');

// fs.writeFileSync('data.txt','hello,world');
// console.log('file created');
// fs.readFileSync('data.txt','utf8');
// console.log('file read successfully');
fs.writeFile('data2.txt', 'hello,fs async', (err: any) => {
    if (err) {
        console.log("weitefile error", err);
    } else {
        console.log("file written successfully");
    }
});

fs.readFile('data.txt', 'utf8', (err: any, data: any) => {
    if (err) {
        console.log("eror", err);
    } else {
        console.log('data', data);
    }
});


fs.appendFile('data.txt', '\n I am the new one', (err: any) => {
    if (err) {
        console.log('append err', err);
    } else {
        console.log('appen success')
    }
});

fs.readFile('data.txt', 'utf8', (err: any, data: any) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('data', data);
    }
});