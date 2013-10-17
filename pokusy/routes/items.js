// items.js
require('../libs/db.js');

exports.findAll = function(req, res) {
    db.collection('items', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findById = function(req,res){
	var id = req.params.id;
	console.log("Retreiving item id = " + req.params.id);
	db.collection("items", function(err, collection){
		collection.findOne({'_id': new BSON.ObjectID(id)}, function(err,item){
			res.send(item);
		});
	});
};

exports.deleteItem = function(req,res){
	var id = req.params.id;
	console.log("Deleting item id = " +id);
	db.collection("items", function(err, collection){
		collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {

			if(err){
				res.resultCode(400);
				res.send({'error': 'Error during deleting - '+ err});

			}else {
				console.log('Item ' + id ' deleted');
				res.send(req.body);
			}

		}
	});
}

exports.updateItem = function(req,res){
	var id = req.params.id;
	var item = req.body;
	console.log('Updating item id = '+ id);
	console.log(JSON.stringify(item));

}
var item = {"name" : "Hokejka", "producer" : "producer", "localId" : "00001" , "vin" : "123456789ABCDEF", "price" : 20000, "category" : "default"};