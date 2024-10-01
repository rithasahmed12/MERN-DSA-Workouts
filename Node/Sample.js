const { error } = require('console');
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
   res.send("heyman");
})

app.get('/error',(req,res,next)=>{
    const err = new Error("Something went Wrong");
    err.status=500;
    next(err)
})

app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(err.staus || 500);

    res.json({
        error:{
            message:err.message
        }
    })
    
})

app.listen(3000,()=>{
    console.log('Server is ready');
    
})