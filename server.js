var express = require('express')
var app = express();
var router = express.Router();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

router.use(function(req, res, next){    
    console.log(req.path);
    next();
})


// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.set('view engine', 'ejs');
app.use(router);


require('./node-app/routes')(router);

var port = process.env.PORT || 8081;
app.listen(port, function(){
    console.log("Running....... Server on :"+port)
})

exports = module.exports = app;   
