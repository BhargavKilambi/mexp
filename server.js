"use strict";
//init express
const express = require('express');
const app = express();
require('dotenv').config()
//mongo init
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });
const ObjectId = require('mongodb').ObjectID;

//listen to port
app.listen(3000,()=>console.log('Server Started'));

//simple get
app.get('/',async (req,resp)=>{
    
    await client.connect(err=>{
        if(err){
            resp.status(500).send(err);
        }

        const collection = client.db('ram').collection('books');

        collection.find().toArray((err,result)=>{
            resp.status(200).json(result);
        });

        client.close();
    });

});

//get with id param
app.get('/:id',async (req,resp)=>{

    await client.connect(err=>{
        if(err){
            resp.status(500).send(err);
        }

        const collection = client.db('ram').collection('books');

        collection.findOne({"_id":new ObjectId(req.params.id)},(err,result)=>{
            resp.status(200).json(result);
        });
        
        client.close();
    });

})

module.exports = {
    app
}