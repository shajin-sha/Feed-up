var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient


router.post('/', function (req, res, next) {

  const uri = 'mongodb+srv://shajin:shajin1530.@cluster1.umyhu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  // mongodb://localhost:27017
  MongoClient.connect(uri, (err, client) => {


    // chekiang that the res username is not in the database
    if (!err) {
      client.db("feed_app").collection("users").findOne({ "userName": req.body[0].userName}, (err, result) => {
        console.log(result)

        if (result === null) {

     
            client.db("feed_app").collection("users").insertOne(req.body[0]).then(()=>{
              res.json(req.body)
      
            }).catch((err)=>{
              res.status(400).json("err"+err)
      
            })

        }
        else{
          res.json({"err":"this user already exist"})
        }



      })

    }
    else {
      console.log("err")
    }

  })


});


module.exports = router;
