var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient

router.post('/', function (req, res, next) {

  const uri = 'mongodb+srv://shajin:shajin1530.@cluster1.umyhu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

  MongoClient.connect(uri, (err, client) => {


    if (req.body[0].userName === "") {
      res.json({ "err": "user name cannot be empty" })
    }
    else {

      if (!err) {
        //   fined one user 
        client.db("feed_app").collection("users").findOne({ "userName": req.body[0].userName }, (err, data) => {
          if (data !== null) {
            //matching user password and database password
            if (data.password === req.body[0].password) {
              res.json(data)
            }
            else {
              res.json({ "err": "incorrect password or username" })
            }

          }
          else {
            res.json({ "err": "incorrect password or username" })
          }


        })
      }
      else {
        console.log("err")
      }

    }
  })



});



module.exports = router;
