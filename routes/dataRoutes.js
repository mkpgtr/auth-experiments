import express from 'express';
import { homePageData } from '../data/homePageData.js';

const router = express.Router();

router.get('/homepageData',(req,res)=>{ 
    res.json({data : homePageData});
})

export  default router;