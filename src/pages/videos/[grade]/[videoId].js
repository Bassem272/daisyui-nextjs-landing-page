// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const VideoPage = () => {
//   const router = useRouter();
//   const { grade, videoId } = router.query;
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     if (grade && videoId) {
//       axios
//         .get(`/api/videos/${grade}/${videoId}`)
//         .then(response => {
//           setVideo(response.data.video_data);
//         })
//         .catch(error => {
//           console.error('Error fetching video:', error);
//         });
//     }
//   }, [grade, videoId]);

//   if (!video) return <div className="p-4">Loading...</div>;

//   // Extract youtube_id from video_url
//   const getYoutubeId = url => {
//     const regExp =
//       /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
//     const match = url.match(regExp);

//     if (match && match[2].length === 11) {
//       return match[2];
//     } else {
//       return null;
//     }
//   };

//   const youtubeId = getYoutubeId(video.video_url);

//   return (
//     <div className="p-4 mx-auto max-w-screen-lg">
//       <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
//       <div className="relative h-96 mb-4">
//         {youtubeId && (
//           <iframe
//             className="absolute inset-0 w-full h-full"
//             src={`https://www.youtube.com/embed/${youtubeId}`}
//             frameBorder="0"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           ></iframe>
//         )}
//       </div>
//       <div className="mb-4">
//         <p className="text-lg font-semibold">Description:</p>
//         <p className="text-gray-700">{video.description}</p>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const VideoPage = () => {
//   const router = useRouter();
//   const { grade, videoId } = router.query;
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     if (grade && videoId) {
//       axios
//         .get(`/api/videos/${grade}/${videoId}`)
//         .then(response => {
//           setVideo(response.data.video_data);
//         })
//         .catch(error => {
//           console.error('Error fetching video:', error);
//         });
//     }
//   }, [grade, videoId]);

//   useEffect(() => {
//     if (video && typeof window !== 'undefined') {
//       const scriptTag = document.createElement('script');
//       scriptTag.src = 'https://www.youtube.com/iframe_api';
//       scriptTag.async = true;
//       scriptTag.onload = initializePlayer;
//       document.body.appendChild(scriptTag);
//     }
//   }, [video]);

//   const initializePlayer = () => {
//     if (window.YT && window.YT.Player && video) {
//       new window.YT.Player(`youtube-player-${video.id}`, {
//         videoId: video.video_id,
//         playerVars: {
//           modestbranding: 1, // No YouTube logo in control bar
//           rel: 0, // No related videos at end
//           fs: 0, // No full screen button
//           iv_load_policy: 3, // No video annotations
//           disablekb: 1, // Disable keyboard control
//           controls: 1, // Show video controls
//           autoplay: 0, // Prevent autoplay
//           controls: 1, // Show video controls
//           rel: 0, // No related videos at end
//           showinfo: 0, // Hide video title and other information
//         },
//       });
//     } else {
//       setTimeout(initializePlayer, 100); // Retry initialization
//     }
//   };

//   if (!video) return <div className="p-4">Loading...</div>;

//   return (
//     <div className="p-4 mx-auto max-w-screen-lg">
//       <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
//       <div className="relative h-96 mb-4">
//         {video.video_url && (
//           <div
//             className="absolute inset-0 w-full h-full"
//             id={`youtube-player-${video.id}`}
//           ></div>
//         )}
//       </div>
//       <div className="mb-4">
//         <p className="text-lg font-semibold">Description:</p>
//         <p className="text-gray-700">{video.description}</p>
//       </div>
//     </div>
//   );
// };

// // Function to extract YouTube video ID
// const getYoutubeId = url => {
//   const regExp =
//     /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
//   const match = url.match(regExp);

//   if (match && match[2].length === 11) {
//     return match[2];
//   } else {
//     return null;
//   }
// };

// export default VideoPage;

// import { useRouter } from 'next/router';
// import { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';

// const VideoPage = () => {
//   const router = useRouter();
//   const { grade, videoId } = router.query;
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     if (grade && videoId) {
//       axios
//         .get(`/api/videos/${grade}/${videoId}`)
//         .then(response => {
//           setVideo(response.data.video_data);
//         })
//         .catch(error => {
//           console.error('Error fetching video:', error);
//         });
//     }
//   }, [grade, videoId]);

//   const initializePlayer = useCallback(() => {
//     if (window.YT && window.YT.Player && video) {
//       new window.YT.Player(`youtube-player-${video.id}`, {
//         videoId: getYoutubeId(video.video_url),
//         playerVars: {
//           modestbranding: 1, // Minimize YouTube logo in control bar
//           rel: 0, // No related videos at end
//           fs: 0, // No full screen button
//           iv_load_policy: 3, // No video annotations
//           disablekb: 1, // Disable keyboard control
//           controls: 1, // Show video controls
//           autoplay: 0, // Prevent autoplay
//           showinfo: 0, // Hide video title and other information
//           origin: window.location.origin // Your site origin
//         },
//         events: {
//           onReady: (event) => {
//             event.target.setPlaybackQuality('hd720');
//           },
//           onStateChange: (event) => {
//             if (event.data === window.YT.PlayerState.PLAYING) {
//               event.target.setPlaybackQuality('hd720');
//             }
//           }
//         }
//       });
//     } else {
//       setTimeout(initializePlayer, 100); // Retry initialization
//     }
//   }, [video]);

//   useEffect(() => {
//     if (video && typeof window !== 'undefined') {
//       const scriptTag = document.createElement('script');
//       scriptTag.src = 'https://www.youtube.com/iframe_api';
//       scriptTag.async = true;
//       scriptTag.onload = initializePlayer;
//       document.body.appendChild(scriptTag);
//     }
//   }, [video, initializePlayer]);

//   if (!video) return <div className="p-4">Loading...</div>;

//   return (
//     <div className="p-4 mx-auto max-w-screen-lg">
//       <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
//       <div className="relative h-96 mb-4">
//         {video.video_url && (
//           <div
//             className="absolute inset-0 w-full h-full"
//             id={`youtube-player-${video.id}`}
//           ></div>
//         )}
//       </div>
//       <div className="mb-4">
//         <p className="text-lg font-semibold">Description:</p>
//         <p className="text-gray-700">{video.description}</p>
//       </div>
//     </div>
//   );
// };

// // Function to extract YouTube video ID
// const getYoutubeId = url => {
//   const regExp =
//     /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
//   const match = url.match(regExp);

//   if (match && match[2].length === 11) {
//     return match[2];
//   } else {
//     return null;
//   }
// };

// export default VideoPage;
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const VideoPage = () => {
  const router = useRouter();
  const { grade, videoId } = router.query;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (grade && videoId) {
      axios
        .get(`/api/videos/${grade}/${videoId}`)
        .then(response => {
          setVideo(response.data.video_data);
        })
        .catch(error => {
          console.error('Error fetching video:', error);
        });
    }
  }, [grade, videoId]);

  if (!video) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 mx-auto max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <div className="relative h-96 mb-4">
        {video.video_url && (
          <iframe
            src={`https://player.vimeo.com/video/${getVimeoId(video.video_url)}?dnt=1&autoplay=0&loop=0&title=0&byline=0&portrait=0&controls=0`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Description:</p>
        <p className="text-gray-700">{video.description}</p>
      </div>
    </div>
  );
};

// Function to extract Vimeo video ID
const getVimeoId = url => {
  const regExp = /vimeo\.com\/(?:video\/)?([0-9]+)/;
  const match = url.match(regExp);

  if (match) {
    return match[1];
  } else {
    return null;
  }
};

export default VideoPage;
