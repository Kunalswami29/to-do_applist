// setting up the homecontroller
module.exports.home=function(req,res){
    return res.render('home',{
        title:'To-do App'
    });
};