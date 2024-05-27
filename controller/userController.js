//@desc Register
//route GET /api/contacts
//@acess public

const getContact = asyncHandler (async (req,res)=>{
    const contact = await Contact.find();
    res.status(200).json(contacts);
});