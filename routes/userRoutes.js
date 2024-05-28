const express=require("express");
const router=express.Router(); 
const {registerUser,loginUser,currentUser} = require("../controller/userController");

//router.route("/register").get(registerUser);
router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/current",currentUser);
//router.route("/login").post(loginUser);
//router.route("/current").get(curUser);

module.exports=router;