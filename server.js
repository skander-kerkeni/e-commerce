const express = require("express");
const morgan = require("morgan");
const cors= require("cors");

const app=express();
require("dotenv").config({
    path:'./index.env'
});

app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('test Route');
});
//page not founded
app.use((req,res)=>{
    res.status(400).json({
        msg:"Page not founded"
    });
})
// route
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}!`);
});