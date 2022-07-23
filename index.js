const express = require("express");
app = express();
const port = 2022;
const portAddress = ("http://localhost:" + port)

app.get('/' , (req , res)=>{
   res.send('<h1>Home page</h1>')
})

app.get('/about' , (req , res)=>{
    res.send('<h1>About page</h1>')
 })
 
 app.get('/contact' , (req , res)=>{
    res.send('<h1>Contact Page</h1>')
 })
 
 app.get('/service' , (req , res)=>{
    res.send('<h1>Service Page</h1>')
 })
 

app.listen(port, ()=>{
    console.log("Server Run Success, Server Address = " + portAddress);
})


