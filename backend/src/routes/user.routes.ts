import express from 'express';
import { getUserPurchasedVideos } from '../controllers/userController';

const router = express.Router();

// دریافت ویدیوهای خریداری شده توسط کاربر
router.get('/purchased-videos', getUserPurchasedVideos);

export default router;
