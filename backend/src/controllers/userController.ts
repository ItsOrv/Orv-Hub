import { Request, Response } from 'express';
import User from '../models/User';

export const getUserPurchasedVideos = async (req: Request, res: Response) => {
    const userId = req.user.id; // فرض بر این است که کاربر از طریق احراز هویت شناسایی شده است

    try {
        const user = await User.findById(userId).populate('purchasedVideos');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        res.json({ success: true, videos: user.purchasedVideos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
