var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient
var multer = require("multer")



let date = new Date()

const dateNow = date.getTime()



const DpFIleName = dateNow + "--user"


const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        // node.js express public dir 
        // storing static file at this dir 
        // and access this from react-app
        callback(null, "./public/images/profile")

    },


    filename: function (request, file, callback,) {
        callback(null, DpFIleName + file.originalname);
    }
})


const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3
    }
})














router.post("/", upload.single("Dp"), (req, res, next) => {
    const uri = 'mongodb+srv://shajin:shajin1530.@cluster1.umyhu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    MongoClient.connect(uri, (err, client) => {
        if (err) {
            console.log("err")
        }
        else {

            let data = {
                Name: req.body.Name,
                userName: req.body.userName,
                Bio: req.body.Bio,
                Dp: DpFIleName + req.body.DpFIleName,
                profileUpdated: req.body.profileUpdated,
            }
            client.db("feed_app").collection("users").updateOne({ userName: data.userName }, { $set: { ...data } }, (err) => {
                if (err) {
                    res.json(
                        {
                            err: "err to update user",
                        })
                }
                else {
                    res.json({ dp: DpFIleName + req.body.DpFIleName })
                }
            })
        }
    })
})


module.exports = router;