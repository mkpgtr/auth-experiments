import User from "../models/User.js";

export const updateUser = async(req,res)=>{
    console.log(req.files['images'].length);
    res.json({message:'User updated'});
}

export const getCurrentUser = async(req,res)=>{

    console.log(req?.user)
    const user = await User.findById(req.user.userId).select('-password');
    res.json({user});
}


