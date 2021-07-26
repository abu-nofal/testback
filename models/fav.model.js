'use strict'
const mongoose=require('mongoose');

const favSchema= new mongoose.Schema({
    strDrink:{type:String},
    strDrinkThumb:{type:String},
    idDrink:{type:String},
})

const favModel=mongoose.model('favorite',favSchema);

module.exports=favModel;