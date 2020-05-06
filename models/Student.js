

var mongoose = require("mongoose");

var Student = mongoose.model("Info",{
	ident: {
		required: true,
		unique: true,
		type:Number
	},
	name: String
});

//var Student = mongoose.model("Info",{
//	ident: Number,
//	name: String
//});


module.exports = Student;



