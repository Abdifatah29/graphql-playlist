const express = require('express');
//a convension for express-graghql
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to Mlab db
// mongoose.connect('mongodb+srv://afrah:afrah29@abdifatah29-k2ek3.mongodb.net/test?retryWrites=true&w=majority');
mongoose.createConnection('mongodb+srv://afrah:afrah29%40abdifatah29-k2ek3.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
console.log('DB Connected');})

//



//this function will handle grapghql request
app.use('/graphql', graphqlHTTP({
    //this schema will tell express how how diagram will look
    schema,
    graphiql: true
}));
app.listen(3000, () => {
    console.log('Now listening for requests on port 30000');
})
