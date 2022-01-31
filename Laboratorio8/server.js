var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  
  var tables = [
    {
      customerName: "Kevin",
      phoneNumber: "111111111",
      customerEmail: "kevin@gmail.com",
    },
    {
      customerName: "Marco",
      phoneNumber: "22222222",
      customerEmail: "marco@gmail.com",
    },
    {
      customerName: "Breiner",
      phoneNumber: "33333333",
      customerEmail: "breiner@gmail.com",
    },
    {
      customerName: "luis",
      phoneNumber: "44444444",
      customerEmail: "luis@gmail.com",
    },
  ];
  
  var waitlist = [];


app.get("/api/tables", function (req, res) {
    return res.json(tables);
  });
  
  app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
  });


  app.post("/api/tables", function (req, res) {
    var newTable = req.body;
    console.log(tables.length);
    if (tables.length < 5) {
      tables.push(newTable);
    } else {
      waitlist.push(newTable);
    }
    res.json(newTable);
  });
  
 
  app.post("/api/waitlist", function (req, res) {
    console.log("post waitlist");
  });
  

  app.post("/api/clear", function (req, res) {
    tables = [];
    waitlist = [];
    return res.json(tables);
  });
  