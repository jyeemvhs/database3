

let path = require("path");
let express = require("express");
var mongoose = require("mongoose");   //new

let router = express.Router();

router.get("/",function(req,res){
	res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Student = require('./Student');

router.post('/create', function(req, res){
	if (req.body.name == "") {
		res.json({retVal:false});
		return;
	}
	let obj = new Student(req.body.identifier,req.body.name);
	return(db.postStudent(obj,res));
});


router.get('/read', function(req, res){
	return(db.getStudent(req.query.identifier,res));
});



router.put('/update', function(req, res){
	if (req.body.name == "") {
		res.json({retVal:false});
		return;
	}
	let obj = new Student(req.body.identifier,req.body.name);
	return(db.putStudent(obj,res));
});

router.delete('/delete/:identifier', function(req, res){
	return( db.deleteStudent(req.params.identifier,res));
});


module.exports = router;
