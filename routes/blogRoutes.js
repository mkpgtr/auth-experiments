import express from 'express';

const router = express.Router();

import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from '../controllers/blogControllers.js';
import { validateCreateBlog, validateUpdateBlog } from '../middlewares/validationMiddleware.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

router.route('/').get(getBlogs).post(validateCreateBlog, createBlog);
router.route('/:id').get(getBlog).put(validateUpdateBlog, updateBlog).delete(deleteBlog);

export default router;