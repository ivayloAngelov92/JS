const router=require('express').Router()
const homeController=require('./controllers/homeController')
const userController=require('./controllers/userController')    
//todo: add endpoints with controllers
router.use(homeController)
router.use('/user', userController)
router.get('*', (req, res) =>{
    res.redirect('/404')
})

module.exports = router