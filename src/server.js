var express = require('express');
var app = express();
var fs = require("fs");
app.use(express.urlencoded({
   extended: true
 }))

 //console.log("Starting");
//Hardcoded
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

app.get('/', function (req, res) {
    res.send('Hello from A!')
    
})

//Original add user function, deprecating this but saving for visibility for now
// app.post('/addUser', function (req, res) {
// // First read existing users.
// fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//    data = JSON.parse( data );
//    //console.log(res);
//    console.log(req.body.fname);
//    data["user4"] = req.body;
//    console.log( data );
//    res.end( JSON.stringify(data));
//    });
// })



//Actual add user function
app.post('/addUserHandler', function (req, res) {
   try {
     
      // First read existing users.
      fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
         let users = [];
         users = JSON.parse(data);
         
         console.log(users);
         input = JSON.stringify(req.body);
         console.log(input);
         users.push(input);
         //console.log(users);
         //console.log( data );
         //Let's append this to the data
         let newData = JSON.stringify(users);
         fs.writeFile("./users.json", newData, function(err) { if (err) throw err; })
         res.end(console.log(data));
      });
   } catch (e) { console.log(e);}
 })
 



 //This currently functions as an "Add user" will compartmentalize functionality soon
 app.get('/addUser', function (req, res) {
     res.send('Edit  page \
     <form action="addUserHandler" method="post"> \
  <label for="fname">First name:</label><br> \
  <input type="text" id="fname" name="fname"><br> \
  <label for="lname">Last name:</label><br> \
  <input type="text" id="lname" name="lname"><br> \
  <label for="username">Username:</label><br> \
  <input type="text" id="username" name="username"><br> \
  <label for="password">Password:</label><br> \
  <input type="password" id="password" name="password"><br> \
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