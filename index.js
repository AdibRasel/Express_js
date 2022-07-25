const express = require("express");
app = express();
const port = 2022;
const portAddress = ("http://localhost:" + port)

app.get('/' , (req , res)=>{
    res.cookie("name", "Rasel Hossain Adib")
    res.cookie("father", "Harun Or Roshid")
    res.cookie("mother", "firoza Begum")
    res.cookie("city", "Noakhali")
    res.end("Cookie set success")
   })

app.get('/about', (req, res)=>{

    res.clearCookie("name");
    res.end("name cookie er value clear success")


})







app.post('/about' , (req , res)=>{

   // res.send('any string')

   // res.end('any string')

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


