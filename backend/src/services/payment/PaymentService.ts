import { checkTronTransaction, checkTONTransaction } from './TronPayment';
import { addVideoToUser } from '../video/VideoService'; // فرض بر این است که این تابع برای افزودن ویدیو به کاربر نوشته شده است

// تایید پرداخت و افزودن ویدیو به خریدهای کاربر
export const verifyAndAddVideo = async (transactionId: string, network: 'tron' | 'ton', userId: string, videoId: string) => {
    let isPaymentSuccessful = false;

    // بررسی تراکنش بر اساس شبکه
    if (network === 'tron') {
        isPaymentSuccessful = await checkTronTransaction(transactionId);
    } else if (network === 'ton') {
        isPaymentSuccessful = await checkTONTransaction(transactionId);
    }

    if (isPaymentSuccessful) {
        // پرداخت تایید شد، ویدیو به لیست خرید کاربر اضافه می‌شود
        await addVideoToUser(userId, videoId);
        return { success: true, message: 'Payment successful and video added.' };
    } else {
        return { success: false, message: 'Payment verification failed.' };
    }
};
