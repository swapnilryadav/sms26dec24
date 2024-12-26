// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Swapnil@29',
//     database: 'sms26dec24'
// });



// app.post("/ss",(req,res)=>{
//     let sql = "insert into student value(?,?,?)";
//     let data = [req.body.rno,req.body.name,req.body.marks];
//     con.query(sql,data,(err,result)=>{
//         if(err) res.send(err);
//        else  res.send(result);
//     });
// });

// app.get("/gs",(req,res)=>{
//     let sql = "select * from student";
//     con.query(sql,(err,result)=>{
//         if(err) res.send(err);
//         else res.send(result);
//     });
// });

// app.put("/us",(req,res)=>{
//     let sql = "update student set name=?,marks=? where rno=?";
//     let data = [req.body.name,req.body.marks,req.body.rno];
//     con.query(sql,data,(err,result)=>{
//         if(err) res.send(err);
//         else res.send(result);
//     });
// });

// app.delete("/ds",(req,res)=>{
//     let sql = "delete from student where rno=?";
//     let data = [req.body.rno];
//     con.query(sql,data,(err,result)=>{
//         if(err) res.send(err);  
//         else res.send(result);
//     });
// });
// app.listen(9000,()=>{console.log("Ready to serve @ 9000");});

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12754289',
    password: 'TwqMcRduy5',
    database: 'sql12754289'
});

// Create student record
app.post("/ss", (req, res) => {
    let sql = "INSERT INTO student VALUES (?, ?, ?)";
    let data = [req.body.rno, req.body.name, req.body.marks];
    con.query(sql, data, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

// Get all student records
app.get("/gs", (req, res) => {
    let sql = "SELECT * FROM student";
    con.query(sql, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

// Update student record
app.put("/us", (req, res) => {
    let sql = "UPDATE student SET name = ?, marks = ? WHERE rno = ?";
    let data = [req.body.name, req.body.marks, req.body.rno];
    con.query(sql, data, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

// Delete student record by roll number
app.delete("/ds/:rno", (req, res) => {
    let sql = "DELETE FROM student WHERE rno = ?";
    let data = [req.params.rno];
    con.query(sql, data, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    });
});

app.listen(9000, () => { console.log("Ready to serve @ 9000"); });
