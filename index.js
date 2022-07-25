const express = require("express");
const body_parser = require("body-parser")
app = express();
app.use(body_parser.json)

app.post('/' , (req , res)=>{

   const userName = req.header("username");

   const password = req.header("password");

   res.send("Your Username is = " + userName + ", Your password is = " + password)


})




app.listen(2000, ()=>{
   console.log("your Server is Runing Success")
})