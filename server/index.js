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
//////////////////////////////////////////////////////members #######1
//create a record
app.post("/records", async (req,res)=>{
   try{

       const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
       console.log(input1);
        const newRecord = await pool.query(`INSERT INTO members (full_name,date_of_birth,english_level,committee,date_of_joining,age,status) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

      res.json('newRecord');
   }

   catch(err){
      console.error(err.message);
   }
});


//get all records

app.get("/records",  async (req, res)=>{
    try{
        const allRecords = await pool.query("SELECT * FROM members");
        await res.json(allRecords)
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
        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        const updateRecord = await pool.query("UPDATE members SET full_name = ?, date_of_birth = ?, english_level = ?, committee = ?, date_of_joining = ?, age = ?, status =?  WHERE id = ? ", [input1,input2,input3,input4,input5,input6,input7, id]);

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


//////////////////////////////////////////committee #######2

const url2 = "/committee";
const db2 = "committee";

//create a record
app.post( url2, async (req,res)=>{
    try{

        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        console.log(input1);
        const newRecord = await pool.query(`INSERT INTO ${db2} (name,coordinator,num_active_members,last_meeting_date,archive_link,num_members,activity_level) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

        res.json(newRecord);
    }

    catch(err){
        console.error(err.message);
    }
});


//get all records
app.get( url2,  async (req, res)=>{
    try{
        const allRecords = await pool.query(`SELECT * FROM ${db2}`);
        res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }

});

//get a record
app.put(`${url2}/:id`, async (req, res) =>{
    try{
        const {id}= req.params;
        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        const updateRecord = await pool.query(`UPDATE ${db2} SET name = ?, coordinator = ?, num_active_members = ?, last_meeting_date = ?, archive_link = ?, num_members = ?, activity_level =?  WHERE id = ? `, [input1,input2,input3,input4,input5,input6,input7, id]);

        res.json(`succccccccess update record with id ${id}`);
    }catch(err){
        console.error(err.message)
    }
});

//delete record
app.delete(`${url2}/:id`, async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteRecord = pool.query(`DELETE FROM ${db2} WHERE id = ?`, [id]);
        res.json(`record  with id ${id} deleted`);
        console.log(id)
    }
    catch (err) {
        console.error(err.message);
    }
});



//////////////////////////////////////////committee #######3
//create a record
const url3 = "/events";
const db3 = "events";

//create a record
app.post( url3, async (req,res)=>{
    try{

        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        console.log(input1);
        const newRecord = await pool.query(`INSERT INTO ${db3} (name,date,main_organizer,num_participants,location,num_orginizers,topic) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

        res.json(newRecord);
    }

    catch(err){
        console.error(err.message);
    }
});


//get all records
app.get( url3,  async (req, res)=>{
    try{
        const allRecords = await pool.query(`SELECT * FROM ${db3}`);
        res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }

});

//get a record
app.put(`${url3}/:id`, async (req, res) =>{
    try{
        const {id}= req.params;
        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        const updateRecord = await pool.query(`UPDATE ${db3} SET name = ?, date = ?, main_organizer = ?, num_participants = ?, location = ?, num_orginizers = ?, topic =?  WHERE id = ? `, [input1,input2,input3,input4,input5,input6,input7, id]);

        res.json(`succccccccess update record with id ${id}`);
    }catch(err){
        console.error(err.message)
    }
});

//delete record
app.delete(`${url3}/:id`, async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteRecord = pool.query(`DELETE FROM ${db3} WHERE id = ?`, [id]);
        res.json(`record  with id ${id} deleted`);
        console.log(id)
    }
    catch (err) {
        console.error(err.message);
    }
});


///////////////////////////////////////////////////////////////////////4 partners
const url4 = "/partners";
const db4 = "partners";

//create a record
app.post( url4, async (req,res)=>{
    try{

        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        console.log(input1);
        const newRecord = await pool.query(`INSERT INTO ${db4} (name,hr_name,site_link,cooperation_event,specialty,cooperation_date,сooperation_type) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

        res.json(newRecord);
    }

    catch(err){
        console.error(err.message);
    }
});


//get all records
app.get( url4,  async (req, res)=>{
    try{
        const allRecords = await pool.query(`SELECT * FROM ${db4}`);
        res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }

});

//get a record
app.put(`${url4}/:id`, async (req, res) =>{
    try{
        const {id}= req.params;
        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        const updateRecord = await pool.query(`UPDATE ${db4} SET name = ?, hr_name = ?, site_link = ?, cooperation_event = ?, specialty = ?, cooperation_date = ?, сooperation_type =?  WHERE id = ? `, [input1,input2,input3,input4,input5,input6,input7, id]);

        res.json(`succccccccess update record with id ${id}`);
    }catch(err){
        console.error(err.message)
    }
});

//delete record
app.delete(`${url4}/:id`, async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteRecord = pool.query(`DELETE FROM ${db4} WHERE id = ?`, [id]);
        res.json(`record  with id ${id} deleted`);
        console.log(id)
    }
    catch (err) {
        console.error(err.message);
    }
});


///////////////////////////////////////////////////////////////////////5 participants
const url5 = "/participants";
const db5 = "event_participants";

//create a record
app.post( url5, async (req,res)=>{
    try{

        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        console.log(input1);
        const newRecord = await pool.query(`INSERT INTO ${db5} (full_name,address,student_group,specialty,questionnaire_link,event,faculty_name) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

        res.json(newRecord);
    }

    catch(err){
        console.error(err.message);
    }
});


//get all records
app.get( url5,  async (req, res)=>{
    try{
        const allRecords = await pool.query(`SELECT * FROM ${db5}`);
        res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }

});

//get a record
app.put(`${url5}/:id`, async (req, res) =>{
    try{
        const {id}= req.params;
        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        const updateRecord = await pool.query(`UPDATE ${db5} SET full_name = ?, address = ?, student_group = ?, specialty = ?, questionnaire_link = ?, event = ?, faculty_name =?  WHERE id = ? `, [input1,input2,input3,input4,input5,input6,input7, id]);

        res.json(`succccccccess update record with id ${id}`);
    }catch(err){
        console.error(err.message)
    }
});

//delete record
app.delete(`${url5}/:id`, async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteRecord = pool.query(`DELETE FROM ${db5} WHERE id = ?`, [id]);
        res.json(`record  with id ${id} deleted`);
        console.log(id)
    }
    catch (err) {
        console.error(err.message);
    }
});


///////////////////////////////////////////////////////////////////////6 participants
const url6 = "/print";
const db6 = "printery_production";

//create a record
app.post( url6, async (req,res)=>{
    try{

        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        console.log(input1);
        const newRecord = await pool.query(`INSERT INTO ${db6} (event,topic,num_production,manufacture_date,printery,author,production_type) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

        res.json(newRecord);
    }

    catch(err){
        console.error(err.message);
    }
});


//get all records
app.get( url6,  async (req, res)=>{
    try{
        const allRecords = await pool.query(`SELECT * FROM ${db6}`);
        res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }

});

//get a record
app.put(`${url6}/:id`, async (req, res) =>{
    try{
        const {id}= req.params;
        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        const updateRecord = await pool.query(`UPDATE ${db6} SET event = ?, topic = ?, num_production = ?, manufacture_date = ?, printery = ?, author = ?, production_type =?  WHERE id = ? `, [input1,input2,input3,input4,input5,input6,input7, id]);

        res.json(`succccccccess update record with id ${id}`);
    }catch(err){
        console.error(err.message)
    }
});

//delete record
app.delete(`${url6}/:id`, async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteRecord = pool.query(`DELETE FROM ${db6} WHERE id = ?`, [id]);
        res.json(`record  with id ${id} deleted`);
        console.log(id)
    }
    catch (err) {
        console.error(err.message);
    }
});


///////////////////////////////////////////////////////////////////////7 participants
const url7 = "/location";
const db7 = "location";

//create a record
app.post( url7, async (req,res)=>{
    try{

        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        console.log(input1);
        const newRecord = await pool.query(`INSERT INTO ${db7} (name,address,price,apparatus,wifi,location_area,seats_place) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

        res.json(newRecord);
    }

    catch(err){
        console.error(err.message);
    }
});

//get a record
app.put(`${url7}/:id`, async (req, res) =>{
    try{
        const {id}= req.params;
        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        const updateRecord = await pool.query(`UPDATE ${db7} SET name = ?, address = ?, price = ?, apparatus = ?, wifi = ?, location_area = ?, seats_place =?  WHERE id = ? `, [input1,input2,input3,input4,input5,input6,input7, id]);

        res.json(`succccccccess update record with id ${id}`);
    }catch(err){
        console.error(err.message)
    }
});

//get all records
app.get( url7,  async (req, res)=>{
    try{
        const allRecords = await pool.query(`SELECT * FROM ${db7}`);
        res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }

});

//delete record
app.delete(`${url7}/:id`, async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteRecord = pool.query(`DELETE FROM ${db7} WHERE id = ?`, [id]);
        res.json(`record  with id ${id} deleted`);
        console.log(id)
    }
    catch (err) {
        console.error(err.message);
    }
});


///////////////////////////////////////////////////////////////////////7 participants
const url8 = "/trainers";
const db8 = "trainers";

//create a record
app.post( url8, async (req,res)=>{
    try{

        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        console.log(input1);
        const newRecord = await pool.query(`INSERT INTO ${db8} (full_name,age,email,phone,english_level,working_experience,specialty) VALUES(?,?,?,?,?,?,?) `, [input1,input2,input3,input4,input5,input6,input7]);

        res.json(newRecord);
    }

    catch(err){
        console.error(err.message);
    }
});

//get a record
app.put(`${url8}/:id`, async (req, res) =>{
    try{
        const {id}= req.params;
        const {input1,input2,input3,input4,input5,input6,input7}  = req.body;
        const updateRecord = await pool.query(`UPDATE ${db8} SET full_name = ?, age = ?, email = ?, phone = ?, english_level = ?, working_experience = ?, specialty =?  WHERE id = ? `, [input1,input2,input3,input4,input5,input6,input7, id]);

        res.json(`succccccccess update record with id ${id}`);
    }catch(err){
        console.error(err.message)
    }
});

//get all records
app.get( url8,  async (req, res)=>{
    try{
        const allRecords = await pool.query(`SELECT * FROM ${db8}`);
        res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }

});

//delete record
app.delete(`${url8}/:id`, async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteRecord = pool.query(`DELETE FROM ${db8} WHERE id = ?`, [id]);
        res.json(`record  with id ${id} deleted`);
        console.log(id)
    }
    catch (err) {
        console.error(err.message);
    }
});


/////////////////////////////QUERIES////////////////////////////////

app.get('/get-categories/:attr1/:attr2/:table', async (req,res)=>{
    try{
        const {attr1,attr2,table} = req.params;
         const allRecords = await pool.query(`SELECT ${attr1},${attr2} FROM ${table} `);
        await res.json(allRecords)

    } catch(err){
        console.error(err.message)
    }

});


app.get("/query1/:age/:status",  async (req, res)=>{
    try{
        const {age, status} =  req.params;
        const allRecords = await pool.query(`SELECT * FROM members WHERE age = ? AND status = ?`,[age,status]);
        await res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }
});

app.get("/query2",  async (req, res)=>{
    try{
        const {numMembers, activityLevel} =  req.body;
        const allRecords = await pool.query(`SELECT * FROM ${db2} WHERE num_members = ? AND activity_level = ?`,[numMembers,activityLevel]);
        await res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }
});

app.get("/query3",  async (req, res)=>{
    try{
        const {numOrginizers, topic} =  req.body;
        const allRecords = await pool.query(`SELECT * FROM ${db3} WHERE num_orginizers = ? AND topic = ?`,[numOrginizers,topic]);
        await res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }
});
app.get("/query4",  async (req, res)=>{
    try{
        const {cooperationType, cooperationDate} =  req.body;
        const allRecords = await pool.query(`SELECT * FROM ${db4} WHERE cooperation_type = ? AND cooperation_date = ?`,[cooperationType,cooperationDate]);
        await res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }
});
app.get("/query5",  async (req, res)=>{
    try{
        const {event, facultyName} =  req.body;
        const allRecords = await pool.query(`SELECT * FROM ${db5} WHERE event = ? AND faculty_name = ?`,[event,facultyName]);
        await res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }
});
app.get("/query6",  async (req, res)=>{
    try{
        const {author, productionType} =  req.body;
        const allRecords = await pool.query(`SELECT * FROM ${db6} WHERE author = ? AND production_type = ?`,[author,productionType]);
        await res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }
});
app.get("/query7",  async (req, res)=>{
    try{
        const {apparatus, seatsPlace} =  req.body;
        const allRecords = await pool.query(`SELECT * FROM ${db7} WHERE apparatus = ? AND seats_place = ?`,[apparatus,seatsPlace]);
        await res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }
});

app.get("/query8",  async (req, res)=>{
    try{
        const {specialty, workingExperience} =  req.body;
        const allRecords = await pool.query(`SELECT * FROM ${db8} WHERE specialty = ? AND working_experience = ?`,[specialty,workingExperience]);
        await res.json(allRecords)
    }
    catch(err){
        console.error(err.message)
    }
});