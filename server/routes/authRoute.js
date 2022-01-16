const router = require("express").Router();
const authController = require('../controllers/auth');

router.post('/register', authController.postRegister);
router.post('/login', (req, res)=>{
    console.log(req.body);
    // res.cookie('userId', req.body.userAddress);
    // res.status(200).json(user);
    res.status(200).redirect('http://localhost:3000/')
});

module.exports = router;