import User from '../models/User';
import Video from '../models/Video';

export const addVideoToUser = async (userId: string, videoId: string) => {
    // پیدا کردن کاربر بر اساس شناسه
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');
    
    // پیدا کردن ویدیو بر اساس شناسه
    const video = await Video.findById(videoId);
    if (!video) throw new Error('Video not found');

    // اضافه کردن ویدیو به لیست خریدهای کاربر
    if (!user.purchasedVideos.includes(video._id)) {
        user.purchasedVideos.push(video._id);
        await user.save();
    }
};
