require('../libs/db.js');

exports.findAll = function(req, res) {
    db.collection('quotes', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findById = function(req,res){
	var id = req.params.id;
	console.log("Retreiving quote id = " + req.params.id);
	db.collection("quotes", function(err, collection){
		collection.findOne({'_id': new BSON.ObjectID(id)}, function(err,item){
			res.send(item);
		});
	});
};

var populateDb = function() {
	var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

db.collection('quotes', function(err, collection){
	collection.insert(quotes,{safe:true}, function(err,result){

	});
});
}