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
          console.log(response);
          // Assuming the response data contains an array of video objects
          setVideos(response.data.videos);
        })
        .catch(error => {
          console.error('Error fetching videos:', error);
        });
    }
  }, [grade]);

  return (
    <div>
      <h1>{grade} <p className='ml-2 text-sm text-gray-500'>  Videos</p></h1>
      {/* <div>
        {videos.map((video) => (
          <div key={video.id}>
            <Link href={`/videos/${grade}/${video.id}`} legacyBehavior>
              <a>{video.title}</a>
            </Link>
            <p>{video.description}</p>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{videos && videos.length > 0 ? (
  videos.map((video) => (
    
    <div key={video.id} className="mb-2">
      <Link href={`/videos/${grade}/${video.id}`}>
      <div className="card w-full bg-base-100 shadow-xl rounded-box">
        <figure className="px-10 pt-10">
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Article" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
          <Link href={`/videos/${grade}/${video.id}`} legacyBehavior>
          <a>{video.title}</a>
            </Link>
          </h2>
          <p>{video.description}</p>
          <div className="card-actions">
            <Link href={`/videos/${grade}/${video.id}`}>
              <button className="btn btn-primary">See Now!</button>
            </Link>
          </div>
        </div>
      </div>
      </Link>

    </div>
  ))
) : (
  <p>No videos found.</p>
)}
</div>
    </div>
  );
};

export default GradePage;

// "videos": [
//         {
//             "video_url": "https://www.youtube.com/watch?v=mcTOhSjZ8xw",
//             "tags": [
//                 "math",
//                 "grade 1"
//             ],
//             "grade": "grade1",
//             "id": "video_133b7c23-198a-46c6-9000-cc595684c222",
//             "title": "Math Lesson",
//             "description": "Basic math concepts"
//         },
//         {
//             "video_url": "https://www.youtube.com/watch?v=mcTOhSjZ8xw",
//             "tags": [
//                 "math",
//                 "grade 1"
//             ],
//             "grade": "grade1",
//             "id": "video_314ddca4-bd34-4127-9702-9785c61c69ea",
//             "title": "Math Lesson",
//             "description": "Basic math concepts"
//         },
//         {
//             "video_url": "https://www.youtube.com/watch?v=e_woCLmz7xg",
//             "tags": [
//                 "math",
//                 "grade 1"
//             ],
//             "grade": "grade1",
//             "id": "video_fb435484-0a56-46c0-9b74-c9dcb9c9c44a",
//             "title": "Math Lesson",
//             "description": "Basic math concepts"
//         }
//     ]
// }

