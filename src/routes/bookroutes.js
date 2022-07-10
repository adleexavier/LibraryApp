const express = require("express");
const bookrouter = express.Router();
const bookdata = require('../model/bookdata')
function router(nav){

// Giving things manually 
// var books = [
//     {
//        title: 'tom and jerry',
//        author: 'joseph barbera',
//        genre:'cartoon',
//        img: 'tom.jpg'
 
//     },
 
//     {
//        title: 'harry potter',
//        author: 'jumbalakka',
//        genre:'fantasy',
//        img: 'harry.jpg'
 
//     },
//     {
//        title: 'minnal murali',
//        author: 'basil',
//        genre:'veendum fantasy',
//        img: 'minnal.jpg'
 
//     }
//  ] 
bookrouter.get("/",(req,res)=>{
   bookdata.find() // finds all the books from the database 
    .then(function(books){
      
      res.render("books",
      {
         nav,
         title : "Library",
         books
      });

    })

});

bookrouter.get("/:id",(req,res)=>{   // user enter something in the url or url changes by the href when click to its corresponding element
   const i = req.params.id          // whatever value in the url gets saved in the i 
   bookdata.findOne({_id : i})
   .then(function(book){
      res.render('book',{
         nav,
         title : "Library",
         book            // using that i we are doing the stuff 
      });
   })
   console.log(i);

});

return bookrouter
}

module.exports = router;   // TO acess this file or one of its function  by any other file (by require function) , first this function (or file) should be visible to them--> to make it visible
                           // we export this module   

// so whenever the app.js 
//is requiring this bookrouter, --> provides whatever the functions inside as it will call this function router 
//automatically whenever it is requiring a function it will cause this router function automatically and 
//inside the function we have created in the books router so ……. so I hope you understand why we are 
//expecting this router and why we are returning the bookscouter that is the solution for both calling
// this function as well as returning the book router 



// ---------> IMPORTANT <-------------------------- NAV BAR REUSAL 
//by exporting this module , whenever this module is in demand, the function gets called automatically when it is required and bookrouter is returned in the function SO THEY WILL ALSO GET THE BOOKROUTER ALSO 