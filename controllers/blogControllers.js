import { BadRequestError } from '../errors/customErrors.js';
import Blog from '../models/Blog.js';

import Comment from '../models/Comment.js';
import User from '../models/User.js';
export const createBlog = async(req, res) => {

    // make sure that title & content never be empty
    // thus use validator to validate the input
    const { title, content } = req.body;

    const blog = await Blog.create({ title, content });

    res.json({ message: 'Blog created' });
    };

export const getBlogs = async(req, res) => {
    const blogs = await Blog.find({});
    res.json({ message: 'Blogs retrieved',data : blogs});
    };

export const getBlog = async(req, res) => {
    const {id} = req.params;
    const blog = await Blog.findById(id).populate('comments likes');
    res.json({ message: 'Blog retrieved',data : blog });
    };

export const updateBlog = async(req, res) => {
    res.json({ message: 'Blog updated' });
    }; 

export const deleteBlog = async(req, res) => {
    res.json({ message: 'Blog deleted' });
    };