
// const express = require("express");
// const multer = require("multer")
// app = express()

// var storage = multer.diskStorage({
//    destination:function (req, file, callBack) {
//       callBack(null, "uploads")
//    },
//    filename:function(req, file, callback){
//       callback(null, file.originalname);
//    }
// })
// var upload = multer({storage : storage}).single("myfile")

// app.post('/' , (req , res)=>{
//    upload(req, res, function(error){
//       if(error){
//          res.send("File Uploade Failde")
//          res.end()
//       }else{
//          res.send("File Uploade Success")
//          res.end()
//       }
//    })
// })
// app.listen(4000, ()=>{
//    console.log("Your Server is Runing")
// })


const express = require("express");
app = express();

app.use( "/about" , function(req, res, next){
   console.log("শুধু মাত্র /about রাউট এর জন্য কাজ করবে।");
   next();
})

app.get('/' , (req , res)=>{
   res.send('')
})
app.get('/contact' , (req , res)=>{
   res.send('')
})
app.get('/about' , (req , res)=>{
   res.send('Fine')
})

app.listen(3000, ()=>{
   console.log("Your Server Running Success")
})



