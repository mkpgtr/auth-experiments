import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/customErrors.js";
import User from "../models/User.js";

export const verifyExclusiveCode = async (req, res) => {
    const { code } = req.body;
    console.log(req.body)

    const user = await User.findOne({ _id: req.user.userId });

    
    if(!(code === 'er-1234-5678-91011')){
        throw new BadRequestError('Invalid code');
    }
    
    // allow access for personal

    user.allowAccessForPaths = ['personal'];

    await user.save()
    // console.log(user)
    res.status(StatusCodes.OK).json({message : 'Code is correct'});
}