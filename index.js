// to access express library
const express=require('express');

//to use express
const app=express();

//to set the port 
const port =8000;

// to use the layouts
const expressLayout=require('express-ejs-layouts');


// to set the view engine
app.set('view engine','ejs');
app.set('views','./views');



// to use routes
app.use('/',require('./routes'));














//to check the status of server or telling express what to after setting server
app.listen(port,function(err){
    if(err){
        console.log(`error in setting up the server:${err}`); //interpolation used
    };
    console.log(`server is running up on port:${port}`); // interpolation used
});
