import express from 'express';
import { verifyExclusiveCode } from '../controllers/codeControllers.js';
import User from '../models/User.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.post('/requestExclusive',verifyExclusiveCode)
router.get('/verifyUser',async(req,res)=>{

    console.log('here')
    const user = await User.findOne({ _id: req.user.userId });

    console.log(user.allowAccessForPaths)
    if(!user.allowAccessForPaths.includes('personal')){
        throw new UnauthenticatedError('User is not allowed to access this path')
    }


    res.status(StatusCodes.OK).json({message : 'User is allowed to access this path'})
})

export default router;