import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcryptjs';
import { comparePasswords, hashPassword } from "../lib/passwordUtils.js";
import { NotFoundError, UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../lib/tokenUtils.js";

export const register = async (req, res) => {

  const isFirstAccount = await User.countDocuments() === 0;

  req.body.role = isFirstAccount ? 'admin' : 'user';


  req.body.password =await hashPassword(req.body.password);
    const user = await User.create(req.body);
  
  
    res.status(StatusCodes.CREATED).json({
        user
    });
    

}



export const login = async (req, res) => {

  const {email, password} = req.body;

  const user = await User.findOne({email});

  if(!user){
    throw new UnauthenticatedError('invalid credentials');
  
  }

  const isPasswordCorrect = await comparePasswords(password, user.password);

  if(!isPasswordCorrect){
    throw new UnauthenticatedError('invalid credentials');
  }

  // user entered correct password. now sign jwt

  const token = createJWT({userId: user._id,role : user.role});


  const oneDay = 24 * 60 * 60 * 1000;

    res.cookie('token',token,{
      httpOnly : true,
      expires : new Date(Date.now() + oneDay),
      secure : process.env.NODE_ENV === 'production'
    
    })
     res.status(StatusCodes.OK).json({msg : 'user logged in'})
    }

    export const logout = async (req, res) => {

      res.cookie('token','logout',{
        httpOnly : true,
        expires : new Date(Date.now()),
      })


        res.status(StatusCodes.OK).json({
          msg : 'user logged out'
        })
        }
