const { urlencoded } = require("express");
const express = require("express"); 
const app = express();

app.set('view engine','ejs');
app.use(express.static('./public'));
app.set('views','./src/views');

const nav = [
    {
        link:'/books', name: "Books"
    },
    {
        link:'/authors', name: "Authors"
    },
    {
        link: '/admin', name: 'Add Book'
    }
];

const booksRouter = require("./src/routes/bookroutes")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);

app.use('/books',booksRouter);
app.use('/admin', adminRouter);

// To encode the post request we need a middleware
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res)
{
    res.render("index",
    {   nav,
        title:'Library'
    });
})


const port = process.env.PORT || 2800; // while hosting port num 2800 cannot be always maintained, so port keeps on changing PAGE 1 
app.listen(port)