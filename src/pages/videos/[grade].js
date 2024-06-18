import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const GradePage = () => {
  const router = useRouter();
  const { grade } = router.query;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (grade) {
      axios.get(`/api/videos/${grade}`)
        .then(response => {
          setVideos(response.data.videos);
        })
        .catch(error => {
          console.error('Error fetching videos:', error);
        });
    }
  }, [grade]);

  return (
    <div>
      <h1>{grade} Videos</h1>
      <div>
        {videos.map((video) => (
          <div key={video.id}>
            <Link href={`/videos/${grade}/${video.id}`}>
              <a>{video.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradePage;
