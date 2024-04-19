import mongoose from "mongoose";
import { BlogCategories } from "../lib/constants.js";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    likes : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    category : {
        type : String,
        required : true,
        default : Object.values(BlogCategories)[0],
        enum : Object.values(BlogCategories)
    }
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;