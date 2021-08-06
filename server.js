const express = require("express");
const morgan = require("morgan");
const cors= require("cors");
const bodyParser= require("body-parser");
const app=express();
require("dotenv").config({
    path:'./index.env'
});
//mongoDB
const connectDB = require('./src/DA/db');
connectDB();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// Routes user

app.use('/api/user/',require('./src/routes/auth.route'));

// Route category

app.use('/api/category/', require('./src/routes/category.route'));
app.get('/', (req, res) => {
    res.send('test route => home page');
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
