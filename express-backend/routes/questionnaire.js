const express = require('express');
const questionnaire = express.Router();

questionnaire.get("/",(req,res)=>{
    //res.send("<h1>questionnaire</h1>");
    res.status(200).json({message: 'Well done Shamil!!!!'});
});

module.exports = questionnaire;