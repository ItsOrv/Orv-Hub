import { Request, Response } from 'express';
import { verifyAndAddVideo } from '../services/payment/PaymentService';
import { addVideoToUser } from '../services/video/VideoService';

export const verifyPaymentAndAddVideo = async (req: Request, res: Response) => {
    const { transactionId, network, userId, videoId } = req.body;

    try {
        const result = await verifyAndAddVideo(transactionId, network, userId, videoId);
        if (result.success) {
            // پرداخت تایید شد، ویدیو به لیست خریدهای کاربر اضافه می‌شود
            await addVideoToUser(userId, videoId);
            res.json({ success: true, message: 'Payment successful and video added to your library.' });
        } else {
            res.status(400).json({ success: false, message: 'Payment verification failed.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
