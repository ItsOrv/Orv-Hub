import React, { useEffect, useState } from 'react';

interface Video {
    title: string;
    description: string;
    fileUrl: string;
}

const PurchasedVideos: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchPurchasedVideos = async () => {
            const response = await fetch('/api/user/purchased-videos', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setVideos(data.videos);
        };

        fetchPurchasedVideos();
    }, []);

    return (
        <div>
            <h2>Your Purchased Videos</h2>
            {videos.length > 0 ? (
                videos.map((video) => (
                    <div key={video.title}>
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                        <video controls>
                            <source src={video.fileUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))
            ) : (
                <p>You haven't purchased any videos yet.</p>
            )}
        </div>
    );
};

export default PurchasedVideos;
