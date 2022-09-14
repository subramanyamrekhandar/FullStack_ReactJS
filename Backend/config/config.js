const mysql = require("mysql2");

const db = mysql.createConnection({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});


db.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
});


module.exports = db;