const express = require('express');
//a convension for express-graghql
const graphqlHTTP = require('express-graphql');
const app = express();

//this function will handle grapghql request
app.use('/graphql', graphqlHTTP({
    //this scheme will tell express how how diagram will look
    
}));
app.listen(3000, () => {
    console.log('Now listening for requests on port 30000');
})
