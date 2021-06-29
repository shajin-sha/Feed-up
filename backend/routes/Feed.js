var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient

router.post('/', function (req, res, next) {

  MongoClient.connect("mongodb://localhost:27017", (err, client) => {

    if(err){
        console.log(err)
    }
    else{
        console.log(req.body[0])

        client.db("feed_app").collection("Feed").insertOne(req.body[0]).then(()=>{
            res.json("feed added")
        }).catch((err)=>{
            res.status(400).json("err"+err)

        })
    }

  })

});







module.exports = router;
