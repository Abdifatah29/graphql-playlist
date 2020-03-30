const express = require('express');
//a convension for express-graghql
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

//this function will handle grapghql request
app.use('/graphql', graphqlHTTP({
    //this schema will tell express how how diagram will look
    schema,
    graphiql: true
}));
app.listen(3000, () => {
    console.log('Now listening for requests on port 30000');
})
