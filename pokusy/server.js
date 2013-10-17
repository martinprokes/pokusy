var express = require("express"),
quotes = require('./routes/quotes'),
items = require('./routes/items');

var app = express();
app.use(express.bodyParser());

var quotesData = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];



app.get('/quote/random', function(req,res){
	var id = Math.floor(Math.random() * quotesData.length);
	var q = quotesData[id];
	res.json(q);


});


app.get('/', quotes.findAll);
app.get('/items', items.findAll);
app.get('/items/:id', items.findById);
app.get('/quote/:id', quotes.findById);

app.listen(process.env.PORT || 2222);


