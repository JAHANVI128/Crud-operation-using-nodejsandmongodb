const express = require('express')
const multer = require('multer')

const app = express()

const mystorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({
    // dest:'uploads/'
    storage:mystorage,
    fileFilter:function(req,file,cb){
        if(file.mimetype == "image/jpeg" || file.mimetype == "image/x-png"){
            cb(null,true);
        } else{
            cb(null,false);
            cb(new Error("Valid Extensions are jpeg/png"))
        }
    },
    limits:{
        fileSize:1024*1024*12
    }
})

app.post('/signup',upload.single('profilepic'),function(req,res){
   
    //req.file is the `avatar` file
    //req.body will hold the text fields,if there were any

    console.log(req.body);
    console.log(req.file);

    res.json({
        msg:"Signup done",
        status:200,
        data:"Signup done"
    })
})

app.listen(9999)