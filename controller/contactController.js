//CHẠY DÒNG npm i express-async-handler
//Do sử dụng mongodb và mongoose nên xài async 
const asyncHandler=require("express-async-handler");
const Contact = require("../models/contactModel");



///@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts= asyncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});
///@desc create new contact
//@route POST /api/contacts
//@access public
const createContact=asyncHandler(async(req,res)=>{
    console.log("The request body is ", req.body)
    const {name,email,phone}= req.body;
    if(!name||!email||!phone)
        {
            res.status(400);
            throw new Error ("All fields are mandatory !");
        }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json({contact});
});
///@desc get/find contact by id
//@route POST /api/contacts
//@access public
const getContact=asyncHandler(async (req,res)=>{ //GET
    const contact =await Contact.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Contact not found");
        }
    res.status(200).json(contact);
});
///@desc update contact
//@route PUT /api/contacts
//@access public
const UpdateContact=asyncHandler(async (req,res)=>{ //UPDATE
    const contact =await Contact.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Contact not found");
        }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
    );
    res.status(200).json(updatedContact);
    
});

///@desc DELETE contact
//@route DELETE /api/contacts
//@access public

const DeleteContact=asyncHandler(async (req,res)=>{ //DELETE
    const contact =await Contact.findById(req.params.id);
    if(!contact)
        {
            res.status(404);
            throw new Error("Contact not found");
        }
    await Contact.remove();
    res.status(200).json(contact);
});
module.exports={getContacts,createContact,getContact,UpdateContact,DeleteContact}