import * as mysql from 'mysql2';

const rootConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

rootConnection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL as root");

    // const queries = [
    //     "CREATE DATABASE IF NOT EXISTS mydb",
    //     "CREATE USER IF NOT EXISTS 'alagar'@'localhost' IDENTIFIED BY 'alagre@123'",
    //     "GRANT ALL PRIVILEGES ON mydb.* TO 'alagar'@'localhost'",
    //     "FLUSH PRIVILEGES"
    // ];

    // queries.forEach((q) => {
    //     rootConnection.query(q, (err) => {
    //         if (err) throw err;
    //         console.log(`Executed: ${q}`);
    //     });
    // });
});
