import express from 'express';
import { cancel, getCheckoutSession, success } from '../controllers/bookingController.js';

const router = express.Router();

router.get('/checkout-session/:id',getCheckoutSession);
router.get('/checkout-success',success);
router.get('/checkout-cancel',cancel);

export default router;
