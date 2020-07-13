# to-do_applist

        It's an app build using the Nodejs , MongoDB ,Express Webframe work and many other libraries. In this app the user can create the list of tasks he need to 
        do and after completing the particular task , the user can delete them , and all the tasks created are stored in the database too.
        
# Steps to create the project 

       Step-1 Initialize the Project 
       
              1.1 First of all initialize the app by doin npm init  in terminal and give entry file as index.js
              1.2 After initializing the app  install the express frame work .
              1.3 After installing the express framework import the library in the index.js file .
              1.4 Fire up the server after this on the port defined.
              
      Step-2  Creating the directories /setup the routes
            
              2.1 Create the different directories like routes,models,config,views,controllers and assets.
              2.2 After that setup the route to the home page an create a file index.js in routes directory.
              2.3 Import the path to route directory in the main index.js file.
           
            
      Step-3 Create the Model/Database/Schema
       
             3.1 For creating the schema of the user we need to install the Mongoose .
             3.2 After installing the mongoose , setup the mongoose connection in the config directory.
             3.3 Once it is done then create the schema for the Database in the model directory.
             3.4 After creating the schema add the path to the main index.js file for the mongose Db .
        
      Step-4 Setup the View Engine
         
            4.1 After adding the schema we need to add the views to the project and for that we need to install Ejs view engine.
            4.2 After installling the ejs import the library in the main index.js file and and set app to use the view engine .
            4.3 After setting up then create the Ejs file in the views directory and code the html file for the frontend part of the db.
            
      Step-5 Add Assets 
      
           5.1 Set up the express to use the static file from the assets directory in the index.js file.
           5.2 Create the css folder in the assets directory and then add css for the frontend of homepage.
      
      Step-6 Set up Controllers 
      
           6.1 first of all create controller to render to the homepage.
           6.2 After this add the controller to create the description of user in the schema
           6.3 AFter this add the controller for deleting the user .
          
     Step-7  set up the routes for rendering to homepage
           
           7.1 In the end create the route for rendering to the home page in the routes index.js file.
     
     Finally the project is completed you can check the functionality by running the server .
