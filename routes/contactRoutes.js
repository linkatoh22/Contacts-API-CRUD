const express =require("express");
const router=express.Router();
const {getContacts,createContact,getContact,UpdateContact,DeleteContact}= require("../controller/contactController");
const validateToken=require("../middleware/validateTokenHandle");

router.use(validateToken);// Use validate token for all route
//if use for only some route then add it in the parameter
router.route("/").get(getContacts).post(createContact);
 //save lines
//router.route("/").post(createContact);

router.route("/:id").get(getContact).put(UpdateContact).delete(DeleteContact);

//save lines
//router.route("/:id").put(UpdateContact);

//router.route("/:id").delete(DeleteContact);



module.exports=router;
