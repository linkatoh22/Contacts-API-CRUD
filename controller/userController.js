//@desc Register
//route GET /api/users/register
//@acess public everyone can entry

const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler (async (req,res)=>{
    res.json({message:"Register the user"});
});

//@desc Login User
//Router POST /api/users/login
//@acess public/ everyone can entry
const loginUser = asyncHandler (async (req,res)=>{
    res.json({message:"Login the user"});
})
//@desc Current user info
//@route GET /api/users/current
//@access private
const currentUser =asyncHandler(async (req,res)=>{
    res.json({message:"Current user"});
})
module.exports= {registerUser,loginUser,currentUser};



