const mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testApp"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;