// to acces from db ;
const Description = require('../models/descriptions');

// functions to be performed
module.exports.home=function(req,res){
    // getting data from the databse
    Description.find({},function(err,task){    //find is also the inbuilt function to find and perform
        if(err){
            console.log('error in fetching the contacts from db')
            return ;
        }
        return  res.render('home',{
            title:"TO dO APP",
            task_list:task
        });

    });
  
};

module.exports.Create=function(req,res){
    Description.create({                  //this is to check in the collection contact in DB
        name:req.body.name,
        category:req.body.category,
        date:req.body.date
    },function(err,newtask){
        if(err){
            console.log('error in creating a contact!');
            return;
        }
        return res.redirect('back');
    });
};

module.exports.delete=function(req,res){
    let id=req.query.id;
    Description.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting object from DB')
            return;
        }
        return res.redirect('back') //open the server
    });

    }
