const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res)=>{
    res.status(200).json("Hello World!")
});
app.post('/add',(req,res)=>{
    let first=req.body.num1;
    let second=req.body.num2;
    if(typeof first!="number"||typeof second!="number"){
        res.status(400).json({'message':"invalid data types"})
    }
    else{
        const result=first+second;
        if(result<1000000){
            res.status(200).json({'message':"the sum of given two numbers",'sum':result})
        }
        else{
            res.status(400).json({'message':'Overflow'})
        }
    }

})
app.post('/sub',(req,res)=>{
    let first=req.body.num1;
    let second=req.body.num2;
    if(typeof first!="number"||typeof second!="number"){
        res.status(400).json({'message':"invalid data types"})
    }
    else{
        const result=(first-second);
        if(result>-1000000){
            res.status(200).json({'message':"the difference of given two number",'sum':result})
        }
        else{
            res.status(400).json({'message':'Underflow'})
        }
    }
})

app.post('/multiply',(req,res)=>{
    let first=req.body.num1;
    let second=req.body.num2;
    if(typeof first!="number"||typeof second!="number"){
        res.status(400).json({'message':"invalid data types"})
    }
    else{
        const result=first*second;
        if(result<1000000){
            res.status(200).json({'message':"The product of given numbers",'sum':result})
        }
        else{
            res.status(400).json({'message':'Overflow'})
        }
    }

})
app.post('/divide',(req,res)=>{
    let first=req.body.num1;
    let second=req.body.num2;
    if(typeof first!="number"||typeof second!="number"){
        res.status(400).json({'message':"invalid data types"})
    }
    else if(second==0){
        res.status(400).json({'message':'Cannot divide by zero'})
    }
    else{
        const result=first/second;
        res.status(200).json({'message':"The division of given numbers",'sum':result})
    }

})
// here


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;