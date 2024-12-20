import express from 'express';
import { verifyPaymentAndAddVideo } from '../controllers/paymentController';

const router = express.Router();

// تایید پرداخت و افزودن ویدیو
router.post('/verify-payment-and-add-video', verifyPaymentAndAddVideo);

export default router;
