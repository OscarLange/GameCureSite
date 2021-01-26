var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer'); 

/* GET users listing. */
router.post('/:email', function(req, res, next) {

    console.log("hallo");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    require('dotenv').config();

    const email = req.params.email;
    if(email.match(mailformat)){
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

      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORT
          }
        });
        

      var mailOptions = {
          from: 'gamecure.tc@gmail.com',
          to: email,
          subject: 'Thanks for signing up to CauseCure',
          html: '<h1>Welcome to CauseCure <br></h1><p>Thanks for joing us!<br> Our Team will register you,<br>and we will follow up with you shortly!<br><br> Kind Regards<br> Team GameCure!</p>'
        };

      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        }); 
    } 
    res.send('respond with a resource');
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  document.getElementById("wrongEmail").className = ''; 

  res.send('respond with a resource');
});


module.exports = router;