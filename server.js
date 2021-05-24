var express = require('express');
var app = express();
var fs = require("fs");

var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/example', function (req, res) {
    res.send('Hello from A!')
    
  })

app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 
 app.get('/editUser', function (req, res) {
     res.send('Edit  page \
     <form action="addUser" method="post"> \
  <label for="fname">First name:</label><br> \
  <input type="text" id="fname" name="fname"><br> \
  <label for="lname">Last name:</label><br> \
  <input type="text" id="lname" name="lname"> \
  <input type="submit" value="Submit"> \
</form>\
     <br /><br /> <br />  brokey wokey')
    //
    // First read existing users.
    // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    //    data = JSON.parse( data );
    //    data["user4"] = user["user4"];
    //    console.log( data );
    //    res.end( JSON.stringify(data));
    // });
 })

 app.post('/deleteUser', function (req, res) {

    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})