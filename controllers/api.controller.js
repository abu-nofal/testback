'use strict'

const axios=require('axios');
const apiData = require('../models/api.model');


const DataFromApi=async(req,res)=>{
    const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
    axios.get(url).then(response=>{
        const Data=response.data.drinks.map(item=>{
            return new apiData(item)
        })
        res.send(Data)
    }).catch(err=>{
        console.log(err)
    })


}

module.exports=DataFromApi