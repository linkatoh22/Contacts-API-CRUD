//CHẠY DÒNG npm i express-async-handler
//Do sử dụng mongodb và mongoose nên xài async 
const asyncHandler=require("express-async-handler");




///@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
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
    res.status(201).json({message:"create new contact"});
});
///@desc create new contact
//@route POST /api/contacts
//@access public
const getContact=asyncHandler(async (req,res)=>{ //GET
    res.status(200).json({message:"Get contact for " + req.params.id});
});
///@desc update contact
//@route put /api/contacts
//@access public
const UpdateContact=asyncHandler(async (req,res)=>{ //UPDATE
    res.status(200).json({message:"Update contact for " + req.params.id});
});

///@desc DELETE contact
//@route DELETE /api/contacts
//@access public

const DeleteContact=asyncHandler(async (req,res)=>{ //DELETE 
    res.status(200).json({message:"Delete contact for " + req.params.id});
});
module.exports={getContacts,createContact,getContact,UpdateContact,DeleteContact}