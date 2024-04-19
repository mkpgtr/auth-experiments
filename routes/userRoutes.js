import express from 'express';

const router = express.Router();

import {updateUser,getCurrentUser} from '../controllers/userControllers.js';
import upload from '../middlewares/multerMiddleware.js';

router.get('/current-user',getCurrentUser);

export default router;

