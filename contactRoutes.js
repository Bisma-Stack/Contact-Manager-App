const express=require("express");
const router=express.Router();
const {getContact}=require("../controllers/contactController")

router.route("/").get(getContact);

router.route("/").post((req,res)=>{
    res.status(200).json({message:"Create Contact"});
});

router.route("/:id").put((req,res)=>{
    res.status(200).json({message:`Update Contact for ${req.params.id}`});
});

router.route("/:id").get((req,res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`});
});

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`Get all Contacts for ${req.params.id}`});
});

module.exports=router;