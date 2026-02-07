import PetProfile from "../models/PetProfile.Model.js";
import mongoose from "mongoose";

export const createPetProfile = async(req,res) => {
    const data = req.body;
    if(!data.Petname || !data.category || !data.breed || !data.Age || !data.sex || !data.weight || !data.medicalhistory){
        return res.status(404).json({success:false, message: "please provide all fileds"});
    }
    try{
        const newPetProfile = new PetProfile({...data});
        await newPetProfile.save();
        res.json(201).json({success: true,date:newPetProfile});
    }
    catch(error){
        console.error("Error in create new Pet Profile",error.message);
        res.status(500).json({success:false,message:"Server Error"});
    }
}