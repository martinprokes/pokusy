//db.js
var mongo = require('mongodb');

var Server = mongo.Server, Db = mongo.Db;
BSON = mongo.BSONPure;

var server = new Server ('localhost', 27017, {autoreconnect : true, safe:false} );

db = new Db('mydb', server);

db.open(function(err, db) {

if(!err){
	console.log("connected to mydb");
	db.collection("quotes", {strict : true}, function(err, collection){
			if(err){

			console.log("The quotes db doesn\'t exist. Creating db ...");
			populateDb();
		}
	})
}

});