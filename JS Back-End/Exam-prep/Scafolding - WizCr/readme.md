Init project and structure
Setup developer environment
install express, nodemon, express-handlebars, bcrypt 
    - Configure body parser -app.use(express.urlencoded({extended: false}))
    -configure static middleware -app.use(express.static(path.resolve(__dirname, './public')))
    -configure routes
Add images to and CSS in public directory
Add html files to views directory
configure View engine (express-handlebars)
Add main layout
fix public styles, hyperlinks
render HomePages
Transform all hbs
Group views by logic
Add Controller folder with home controller
Add Database - install mongoose / connect to DB
Authentication
    -userController
    -add Controller to routes
    -fix navigations in the navbars (login, register,logout)
    -render LoginPage
    -render register page
Add user model
    - simple validation in schema
    -add method for register
    -create first user record in DB
    -validate password miss match in schema
    validate email allready exists
Hash Password
    -isntall bcrypt
    -hash password
Login
    -find user by email
    -validate password with hash
Generate JSONwebToken
    -install jsonwebtoken
    -promisify jsonwebtoken
    -generate secret
    -genterate token in service login controller

Return Token in Cookie
    -install cookie-parser
    -config cookie-parser
    -set cookie with token

implement logout
Authentication middleware
    -create middleware directory
    -add auth middleware and import it in express config below cookie-parser
    -decode the token
    -handle invalid token
    -provide authorization
Dynamic Navigation
    -conditional options in nav
    -add user and data in res.locals for hbs template
Error handling
    - add 404 page
    -redirect missing rout to 404