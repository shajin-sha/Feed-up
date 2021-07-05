var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient

router.post('/', function (req, res, next) {
    console.log(req.body)

    MongoClient.connect("mongodb://localhost:27017", (err, client) => {

        if(err){
            console.log(err)
        }
        else{


            client.db("feed_app").collection("Feed").findOne({key:req.body.key},(err,data)=>{
                let CurrentCommentedUsers = data.commentedUsers
                CurrentCommentedUsers.push({comment:req.body.comment,commentedBy:req.body.commentedBy,commentedUserDP:req.body.commentedUserDP})
               client.db("feed_app").collection("Feed").updateOne({key:req.body.key},{$set:{commentedUsers:CurrentCommentedUsers}})

        })

        }
      })


});

module.exports = router;