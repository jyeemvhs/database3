

var express = require("express");
var mongoose = require("mongoose");
var StudentModel = require("./models/Student");
const Student = require('./Student');

let myDatabase = function() {
}

myDatabase.prototype.postStudent = function(student,res) {
  let obj = {ident:student.ident,name:student.name};
  StudentModel.create(obj,function(error,info) {
      if (error) {
          return res.json({retVal:false});
      }
      return res.json({retVal:true});
  });
}

myDatabase.prototype.getStudent = function(ident,res) {

  StudentModel.find({ident:ident},function(error,info) {
      if (error) {
        return res.json({retVal:null});
      }
      else if (info == null) {
        return res.json({retVal:null});
      }

      if (info.length == 1)	
        return res.json({ retVal: new Student(ident,info[0].name) });
      else
        return res.json({retVal:null});
   });
}


//Fix the code for putStudent and deleteStudent.
myDatabase.prototype.putStudent = function(student,res) {
//This is old code.
//  for (let i=0;i<this.students.length;i++) {
//    if (this.students[i] && this.students[i].ident == student.ident) {
//      this.students[i] = new Student(student.ident,student.name);
//      res.json({retVal:true});
//      return;
//    }
//  }
//  res.json({retVal:false});

//This is the new code you have to add to.  
//Return true if good update.  
//Return false if bad update.
//  let obj = {???};  
//  StudentModel.findOneAndUpdate({???},{???},function(error,oldStudent) {
    return res.json({retVal:false})    // this is a place holder and needs to be removed.    
//  });
}

myDatabase.prototype.deleteStudent = function(ident,res) {
//This was the old code.
//  for (let i=0;i<this.students.length;i++) {
//    if (this.students[i] && ident == this.students[i].ident) {
//        let tempPtr = this.students[i];
//        this.students[i] = undefined;
//       res.json({retVal:tempPtr})
//        return;
//    }
//  }
//  res.json({retVal:null});

//This is the new code you have to add to.  
//Return true if good delete. (Because no deleted object is in removed variable)  
//Return false if bad delete.
//  StudentModel.remove({???},function(error,removed) {
    return res.json({retVal:false})    // this is a place holder and needs to be removed.
//  });
}

module.exports = myDatabase;