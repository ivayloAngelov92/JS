//Entry point for project
const express= require('express');
const handlebars= require('express-handlebars');
const path = require('path');
const {PORT, DB_URL}= require('./constants')
const routes= require('./router')
const app = express(); //initialize express
const mongoose= require('mongoose');
const cookieParser= require('cookie-parser');
const {auth}= require('./middlewares/authMiddleware');


//express configuration
app.use(express.static(path.resolve(__dirname, './public'))); //-configure static middleware
app.use(express.urlencoded({extended: false})); // Configure body parser
app.use(cookieParser()); // Configure
app.use(auth)
// handlebars configuration
app.engine('hbs', handlebars.engine({extname:'hbs'}))
app.set('view engine', 'hbs');
app.set('views', 'src/views')

//Database Connection
async function dbConnect(){
    await mongoose.connect(DB_URL)
}

dbConnect()
.then(()=>{ 
    console.log(`Successfully connected!`);
})
.catch(error=>console.log(`Error while connecting to DB ${error.message}`))
//routes
// app.get('/', (req, res) =>{
//     res.render('home')
// })
app.use(routes)

app.listen(PORT, ()=>console.log(`Server listening on port: ${PORT}...`))
