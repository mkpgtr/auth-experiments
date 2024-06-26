import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../lib/tokenUtils.js";

export const authenticateUser = (req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
       throw new UnauthenticatedError('authentication invalid');
    }

    try {
        const {userId,role} = verifyJWT(token);

        req.user = {userId,role};

        next()
    } catch (error) {
        // it means that verifyJWT failed
        throw new UnauthenticatedError('authentication invalid');
    }
}