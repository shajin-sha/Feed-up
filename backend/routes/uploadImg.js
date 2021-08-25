var express = require('express');
var router = express.Router();
var multer = require("multer")
var MongoClient = require("mongodb").MongoClient


let date = new Date()

const dateNow = date.getTime()


const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        // node.js express public dir 
        // storing static file at this dir 
        // and access this from react-app
        callback(null,"./public/images/uploads")
        

    },


    filename: function (request, file, callback,) {
        callback(null, dateNow+file.originalname);
    }
})


const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3
    }
})



router.post('/', upload.single("Img"), function (req, res, next) {

    const uri = 'mongodb+srv://shajin:shajin1530.@cluster1.umyhu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    MongoClient.connect(uri, (err, client) => {

        if(err){
            console.log(err)
        }
        else{
            let data = {
                caption:req.body.caption,
                ImgName:dateNow+req.body.ImgName,
                feedby:req.body.feedby,
                likes:0,
                comments:0,
                likedUsers:[],
                key:dateNow,
                dateSt:req.body.dateSt,
                feedUserDp:req.body.dp,
                type:req.body.type

            }    
            client.db("feed_app").collection("Feed").insertOne(data).then(()=>{
                res.json("feed added")
            }).catch((err)=>{
                res.status(400).json("err"+err)

            })
        }
    
      })

});

module.exports = router;