const express = require('express');
const handlebarsConfig= require('./config/handlebarsConfig')
const expressConfig= require('./config/expressConfig');
const constants= require('./constants');
// local variables
const app = express();




//setUp static files
expressConfig(app)
//handlebars config
handlebarsConfig(app)




app.get('/', (req, res) => {
    res.render('index')
})

app.listen(constants.PORT, () => { console.log(`Server is Running on port: ${constants.PORT}`); });