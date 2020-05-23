const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todo_development');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error in setting databse"));

db.once('open',function(){
    console.log("mongodb is setup succesfuly");
});



module.exports=db;

