// Admin is the one only having the power To ADD OR DELETE a book 
const express = require('express');
const adminRouter = express.Router();
const bookdata = require('../model/bookdata') // by putting ../ helps you to find the location of bookdata

function route (nav){
    adminRouter.get('/',(req,res)=> {
        res.render("add_book",{
            nav,
            title: 'Library'
        } )
     
     })
    adminRouter.get("/gets",(req,res)=>{
      var data = {      
        title  : req.query.title,
        author : req.query.author,
        Genere : req.query.Genere,
        image: req.query.Image
      
      } // you need to pass these data from the form using (get method) 
      
     var book = bookdata(data) // using the schema the data is been structure in the way the schema is designed
                               // SAVING part will be done by this file ie adminRoutes.js
      book.save();             // this is how you save it to the database
      res.redirect("/books");
    });

    adminRouter.post("/pos",(req,res)=>{ 
      var data = {      
        title  : req.body.title, // in the post method we are taking the data from html body <<<<---
        author : req.body.author,
        Genere : req.body.Genere,
        image: req.body.Image
      
      } // DETAILS OF THE FORM CANNOT BE SEEN AS QUERY PARAMETER
        // THIS IS WHY POST IS MORE SECURE THAN THE GET
      
     var book = bookdata(data) // using the schema the data is been structure in the way the schema is designed
                               // SAVING part will be done by this file ie adminRoutes.js
      book.save();             // this is how you save it to the database
      res.redirect("/books");
    });
   return adminRouter;
}
module.exports = route;