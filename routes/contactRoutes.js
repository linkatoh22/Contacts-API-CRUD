const express =require("express");
const router=express.Router();
const {getContacts,createContact,getContact,UpdateContact,DeleteContact}= require("../controller/contactController");

router.route("/").get(getContacts).post(createContact);
 //save lines
//router.route("/").post(createContact);

router.route("/:id").get(getContact).put(UpdateContact).delete(DeleteContact);

//save lines
//router.route("/:id").put(UpdateContact);

//router.route("/:id").delete(DeleteContact);



module.exports=router;
