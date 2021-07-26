'use strict'

const express=require('express')
const cors=require('cors')
require('dotenv').config();
const mongoose=require('mongoose')
const app=express();
app.use(cors());
app.use(express.json());
const DataFromApi=require('./controllers/api.controller')

const {getFav,createFav,deleteFav,updateFav}=require('./controllers/fav.controller')
const PORT=process.env.PORT;

mongoose.connect("mongodb://localhost:27017/try",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.get('/',(req,res)=>{
    res.send('hello m3lem')
})




// ==============
app.get('/api',DataFromApi)

// ==========================
app.get('/fav',getFav)
app.post('/fav',createFav)
app.delete('/fav/:id',deleteFav)
app.put('/fav/:id',updateFav)


app.listen(PORT,()=>{
    console.log(`port is ${PORT}`)
})