import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const VideoPage = () => {
  const router = useRouter();
  const { grade, videoId } = router.query;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (grade && videoId) {
      axios.get(`/api/videos/${grade}/${videoId}`)
        .then(response => {
          setVideo(response.data);
        })
        .catch(error => {
          console.error('Error fetching video:', error);
        });
    }
  }, [grade, videoId]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h1>{video.name}</h1>
      <video controls>
        <source src={video.url} type="video/mp4" />
      </video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPage;
