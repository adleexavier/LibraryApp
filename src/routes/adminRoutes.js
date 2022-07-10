// Admin is the one only having the power To ADD OR DELETE a book 
// ADD BOOK.js 
const express = require('express');
const adminRouter = express.Router();
const bookdata = require('../model/bookdata') // by putting ../ helps you to find the location of bookdata
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false }) // URL ENCODER --> FOR PARSING OUT THE POST REQUEST
                                                                  //  npm install body-parser

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

    adminRouter.post("/pos", urlencodedParser,(req,res)=>{ 
                var data = {      
                  title  : req.body.title, // in the post method we are taking the data from html body <<<<---
                  author : req.body.author,
                  Genere : req.body.Genere,
                  image: req.body.Image
                
                } // DETAILS OF THE FORM CANNOT BE SEEN AS QUERY PARAMETER
                  // THIS IS WHY POST IS MORE SECURE THAN THE GET
                
                bookdata.remove({title:title},(err,data)=>{
                            if(err){
                              console.log(err);
                                  }
                          else{
                              res.send(data);
                              }

                              });

                    });



   return adminRouter;
}
module.exports = route;