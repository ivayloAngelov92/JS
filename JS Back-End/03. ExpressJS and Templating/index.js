const express= require('express');
const handlebars= require('express-handlebars');
const app= express();
const path= require('path');
const PORT= 3000



// view engine configuration

app.engine('hbs',handlebars.engine({extname: 'hbs'}))
app.set('view engine', 'hbs')
//MIDDLEWARE
//third party middleware, body parser

const bodyParser=express.urlencoded({extended:false})
app.use(bodyParser)

const staticFile= express.static('styles')
app.use(staticFile)
// global Middleware
app.use((req,res,next)=>{
    console.log(`HTTP Request: ${req.method} Request path: ${req.path}`);
    next()
})
 const specificMiddleware= (req, res, next) =>{
    console.log('specific middleware has been invoked');
    next()
 }
app.use('/kittens', (req, res, next)=>{
    console.log('kittens middleware has been invoked');
    next()
})

// Routing start
app.get('/', (req, res)=>{
    // res.send("Welcome")
    res.render('home')
})
app.get('/about', (req, res)=>{
    res.render('about')
})
app.get('/specific',specificMiddleware ,(req, res)=>{
    res.send('specific route')
})
// endpoints-> method, path, action
// get - method
// /kitten- path
// action - (req, res) =>{}


app.get('/kittens', (req, res)=>{

    const {getKittens, addKitten}=require('./kittens')
    const kittens=getKittens()
    res.render('kittens', kittens)
    // res.send(`
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <link rel="stylesheet" href="./style.css">
    //     <title>Document</title>
    // </head>
    // <body>
    //     <form method="post">
    //         <label for="name">First name:</label><br>
    //         <input type="text" id="name" name="name" ><br>
    //         <label for="age">Last name:</label><br>
    //         <input type="text" id="age" name="age" ><br><br>
    //         <input type="submit" value="Create Kitten">
    //       </form>
    // </body>
    // </html>`)
})
app.get('/kittens/:kittenId', (req, res)=>{
    const kittenId= Number(req.params.kittenId)
    console.log(req.params);
    if(!kittenId){
        res.status(404).send('bad kitten id:'+ req.params.kittenId)
        return
    }
    res.send({id: kittenId, name: 'Kircho'+ kittenId})
})

app.post('/kittens', (req, res) => {
    console.log(req.body);
    res.send('Kitten has been created')
})
app.get('/download-png', (req, res)=>{
    // res.download("./testKartinka.png") / ends stream by default
    // res.attachment('./testKartinka.png').end()
    res.sendFile(path.resolve(__dirname, './testKartinka.png'))
})

app.get('route-redirect', (req, res)=>{
    res.redirect('/kittens')
})
// error handling
app.get('*', (req, res)=>{
    res.status(404).send('Error message')
})
    
app.listen(PORT, ()=>console.log(`server is running on PORT: ${PORT}`))