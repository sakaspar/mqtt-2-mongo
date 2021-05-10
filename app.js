let MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let express = require('express');
let app = express();
app.listen(3000, () => console.log('Server running on port 3000!'))
var found=false;

/*
app.get('/:name', (req, res) => {
    res.send('Your name is ' + req.params.name + '\n');
});*/

/*app.use(express.json());
app.post('/', (req, res) => {
    res.json(req.body);
});*/





app.get('/:name', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("hamza");
        dbo.collection("hamza").findOne({
            name: req.params.name
        }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            var found=True;
            db.close();
        });
    });
});


if (found==false) {
    app.post('/', (req, res) => {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("hamza");
            dbo.collection("hamza").insertOne({
                name: req.body.name,
                age: req.body.age
            }, 
            function(err, result) {
                if (err) throw err;
                res.json(result);
                db.close();
   
            });
        });
    });
    
  }

  app.put('/update/',function(req,res,next){
    var db = req.db;
    var collection = db.get('hamza');
    collection.findOneAndUpdate({age: req.body.age}, req.body , {new:true},(err,doc)=>{
        if(err)
        console.log('Erreur');
        
    });
    });
  
    



  