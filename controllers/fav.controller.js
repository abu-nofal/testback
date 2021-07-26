'use strict'

const favModel = require("../models/fav.model")

const getFav=async(req,res)=>{
    favModel.find({},(err,data)=>{
        res.send(data);
    })
}

const createFav=async(req,res)=>{
    const {strDrink,strDrinkThumb,idDrink}=req.body

    const newFav=new favModel({
        strDrink:strDrink,
        strDrinkThumb:strDrinkThumb,
        idDrink:idDrink,
    })
    newFav.save();
    res.send(newFav)
}


const deleteFav=async(req,res)=>{
    const id =req.params.id
    favModel.remove({_id:id},(err,data)=>{
        favModel.find({},(err,data)=>{
            res.send(data);
        })
    })
}



const updateFav=async(req,res)=>{
    const id =req.params.id
    const {strDrink,strDrinkThumb,idDrink}=req.body

    favModel.findOne({_id:id},(err,data)=>{
        data.strDrink=strDrink;
        data.strDrinkThumb=strDrinkThumb;
        data.idDrink=idDrink;
        data.save();
        res.send(data)

    })
}


module.exports={getFav,createFav,deleteFav,updateFav}