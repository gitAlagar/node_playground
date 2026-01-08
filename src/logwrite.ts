const fs = require('fs');
const path = require('path');

const writeLog = (msg: string) => {
    const logFile = path.join(__dirname, 'log.txt');
    const timeStamp = new Date().toString();
    const logMessage = `[${timeStamp}] ${msg}\n`;
    fs.appendFile(logFile, logMessage, (err: any) => {
        if (err) {
            console.log("Log write error", err);
        } else {
            console.log("log written successfully");
        }
    });

}

writeLog("frist log message");
writeLog("second log message");


fs.unlink('log.txt', (err: any) => {
    if (err) throw err;
})