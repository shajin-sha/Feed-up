var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient


router.get("/",(req,res,next)=>{

    MongoClient.connect("mongodb://localhost:27017", (err, client) => {

        if(err){
            console.log("err")
        }
        else{
            client.db("feed_app").collection("Feed").find().sort({_id:-1}).limit(50).toArray((err,data)=>{
                if(err) throw err;
                res.json(data)

            })

    
        }
    
      })


})


module.exports = router;