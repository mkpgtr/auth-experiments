import {body,validationResult} from 'express-validator';

import { BadRequestError } from '../errors/customErrors.js';
import User from '../models/User.js';

const withValidationErrors = (validateValues) => {

    return [validateValues,(req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new BadRequestError(errors.array().map((err)=>err.msg).join(','));
        }
        next();

    }];
    
};

export const validateTestParams = withValidationErrors([
    body('name').notEmpty().withMessage('Name is required buddy')
]);

const validateCreateBlog = withValidationErrors([
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required'),
]);

const validateUpdateBlog = withValidationErrors([
    body('title').optional().notEmpty().withMessage('Title is required'),
    body('content').optional().notEmpty().withMessage('Content is required'),
]);


export const validateRegister = withValidationErrors([
    body('username').notEmpty().withMessage('Name is required'),
    body('email').custom(async(value)=>{
        const user = await User.findOne({email : value});
        if(user){
            throw new BadRequestError('Invalid credentials')
        }

    }).isEmail().withMessage('Email is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
]);

export const validateLogin = withValidationErrors([
    body('email').isEmail().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required')
]);

export {
    validateCreateBlog,
    validateUpdateBlog
}