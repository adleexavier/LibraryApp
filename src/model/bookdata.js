const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@bookdata.19xdgdb.mongodb.net/Library?retryWrites=true&w=majority') // library is the name of the database given
                              // ^pwd here (database acess in cloud)       db name ^

const Schema = mongoose.Schema; //acessing the schema in the mongoose package

// creating a schema for a single book 
// ie specifying how you r storing the book data in database

const bookschema = new Schema({ 
    title : String,
    author : String,
    Genere : String,
    image  : String  // image is saved including the name given to image (image name), [HERE WE ARE USING STRING TYPE]
                     // you are acessing the image using the image name 
                     // THIS IS THE SCHEMA FOR THE SINGLE DOCUMENT FOR A COLLECTION IN DATABASE
                     // MONGOOSE JS .COM FOR MORE INFO

});


// INSTANCE OF A MODEL IS CALLED DOCUMENT -->WE KNOW INSTANCE OF A CLASS IS CALLED OBJECT


//TO USE THE SCHEMA WE HAVE TO CONVERT INTO MODEL
var Bookdata = mongoose.model('bookdatas',bookschema); // bookdata is the collection name
                                                     // bookdata--> in mongodb you can see it as bookdatas --> they are converting it to plural automatically (thats the only info i know )
module.exports = Bookdata;  // you are exporting the instance of a document in a collection 
