import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    role : {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified :{
        type: Boolean,
        default: false
    
    },
    allowAccessForPaths : {
        type :[String],
        default : 'general',
        enum: ['personal','official','mysterious','general'],
    }
});

userSchema.virtual('hasExclusiveAcccess').set(function(myBoolean) {
    return this.hasExclusiveAcccess = myBoolean;
});

const User = mongoose.model('User', userSchema);

export default User;