import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    fileUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
