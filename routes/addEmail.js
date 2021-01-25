var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/:email', function(req, res, next) {

    console.log("hallo");

    require('dotenv').config();

    const email = req.params.email;

    const MongoClient = require('mongodb').MongoClient;
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        if(err) {
            console.log(err);
        } else {
            const myobj = { email: email};
            client.db("gamecure").collection("emails").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                client.close();
            });
        }
    });

  res.send('respond with a resource');
});

module.exports = router;