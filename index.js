const express = require("express");
const body_parser = require("body-parser")
app = express();

app.use(body_parser.json())

app.post('/' , (req , res)=>{

   const jsonData = req.body;
   const jsonString = JSON.stringify(jsonData)

   const DataJson = jsonData.name;
   const student_sub = jsonData.sub[2]

   res.end(jsonString + DataJson + student_sub)


})
app.listen(2000, ()=>{
   console.log("your Server is Runing Success")
})

