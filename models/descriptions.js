const mongoose= require('mongoose');
const descripSchema= new mongoose.Schema({   //setting up the schema for db
    name:{
        type:String,
        require:true
    }
});

const Description=mongoose.model('Description',descripSchema);//this is to create the collections we want to store in DB

module.exports=Description;