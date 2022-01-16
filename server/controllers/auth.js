const bcrypt = require('bcrypt');
const Auth = require('../models/auth')

exports.postRegister = async(req, res) => {
    const addressExist = await Auth.find({email: req.body.userAddress});
    if(addressExist.length) return res.status(404).json({
        success: false,
        message: 'address Exist!',
    });
    
    //Hash passwords
    const salt  = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const users = await Auth.find({email: req.body.email});

    const auth = new Auth({
        userAddress: req.body.userAddress,
        email: req.body.email,
        password: hashedPassword,
    });

    try{
        const saveAuth = await auth.save();
    }
    catch(err){
        res.send("Create faild");
    }

    console.log("Register successful!");
    res.status(200).json({ msg: 'Register success!!' });
}