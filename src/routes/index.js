const express = require('express');
const router = express.Router();

const User = require('../model/user');

router.post('/login',async (req,res,next)=>{
    console.log(req.body.pass+" Hola");
    const _user = new User();
    await User.findOne({_id:"5d06c46c87eb962d58ff3fb3"});
    console.log(_user.name);
    res.json("ok");
    // next();
});

module.exports = router;