const express = require('express');

const app = express();

app.get('/values',(req,res)=>{
    try {
        console.log(req.query)
        const {num1,num2} = req.query;
        if(num1 && num2){
        const sum = Number(num1)+Number(num2);
        res.send(sum+'');
        }else{
            throw new Error('No values are passed');
        }  
    } catch (error) {
        res.status(500).json({error:error.message});
    } 
})



app.listen(3003,()=>{
    console.log('Server is ready');
    
})




// find the minimum and maximum prices for each category, assuming there's a category field in each product

db.poducts.aggregate([{$group:{
    _id:'',
    MaxPrice:{"$category":{$max:"$price"}},
    MinPrice:{"$category":{$min:"$price"}}
}}]) 