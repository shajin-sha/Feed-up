var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient

router.post('/', function (req, res, next) {

    MongoClient.connect("mongodb://localhost:27017", (err, client) => {

        if(err){
            console.log(err)
        }
        else{

            client.db("feed_app").collection("Feed").findOne({"key":req.body.key},(err,data)=>{
                var likes = data.likes
                if(req.body.like===+1){

                   client.db("feed_app").collection("Feed").findOne({key:req.body.key},(err,res)=>{

                    let likedUsers = res.likedUsers
                    console.log(likedUsers)
                    likedUsers.push({userName:req.body.user})
                    console.log(likedUsers)
                    
                    client.db("feed_app").collection("Feed").updateOne({key:req.body.key},{$set:{likedUsers}})


                    client.db("feed_app").collection("Feed").updateOne({key:req.body.key},{ $set:{ likes:likes+1}},(err,res)=>{
                   
                    })

                })

                }else if(req.body.like===-1){
                    client.db("feed_app").collection("Feed").updateOne({key:req.body.key},{ $set:{ likes:likes-1}},(err,res)=>{
                   
                    })
                }





            })
        }
      })


});

module.exports = router;