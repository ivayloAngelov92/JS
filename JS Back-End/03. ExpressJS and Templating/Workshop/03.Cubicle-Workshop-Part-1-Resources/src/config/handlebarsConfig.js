const handlebars=require('express-handlebars')

const handlebarsConfig= (app)=>{
    //handlebars config
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs')
app.set('views', 'src/views')
}

module.exports= handlebarsConfig