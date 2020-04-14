const mysql = require("mysql2/promise");

const pool = mysql.createPool({
   host: "localhost",
   user:"db",
   database:"students_org",
   password:"db",
});

module.exports = pool;
// connection.connect((err)=>{
//     if(err){
//        console.log(`Error is ${err.message}`)
//     } else{
//        console.log('Db is connected')
//     }
// });

// pool.query('SELECT * FROM members', (err,res,fields)=>{
//    console.log(err);
//    console.log(res);
//    console.log(fields);
// });