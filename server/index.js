const express =  require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


app.listen(5000,()=>{
   console.log('server run 5000');
});



//routes

//create a record
app.post("/records", async (req,res)=>{
   try{

       const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
       console.log(input1);
        const newRecord = await pool.query(`INSERT INTO members (full_name,date_of_birth,english_level,committee,date_of_joining,age,status) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

      res.json(newRecord);
   }

   catch(err){
      console.error(err.message);
   }
});


//get all records

app.get("/records",  async (req, res)=>{
    try{
        const allRecords = await pool.query("SELECT * FROM members");
        res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }

});

//get a record
app.get("/records/:id", async (req,res)=>{
   try{
       const {id} = req.params;
       const record = await pool.query("SELECT * FROM members WHERE id=?",[id]);
       res.json(record[0]);
   }
   catch(err){
        console.error(err.message);
   }

});

//update a record

app.put("/records/:id", async (req, res) =>{
    try{
        const {id}= req.params;
        const {fullName}  = req.body;
        const updateRecord = await pool.query("UPDATE members SET full_name = ?  WHERE id = ? ", [fullName,id]);

        res.json(`success update record with id ${id}`);
    }catch(err){
        console.error(err.message)
    }
});

//delete record

app.delete("/records/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteRecord = pool.query("DELETE FROM members WHERE id = ?", [id]);
        res.json(`record  with id ${id} deleted`)
    }
    catch (err) {
        console.error(err.message);
    }
});