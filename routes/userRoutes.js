const express=require("express");
const router=express.Router(); 
const {registerUser,loginUser,currentUser} = require("../controller/userController");
const validateToken= require("../middleware/validateTokenHandle");
//router.route("/register").get(registerUser);
router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/current",validateToken,currentUser);
//router.route("/login").post(loginUser);
//router.route("/current").get(curUser);

module.exports=router;