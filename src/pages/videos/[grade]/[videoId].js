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
//  only youtube player >>>>>>>>>>>>>>>
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

// only vimeo player >>>>>>>>>>>>>>>>>>
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

//   return (
//     <div className="p-4 mx-auto max-w-screen-lg">
//       <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
//       <div className="relative h-96 mb-4">
//         {video.video_url && (
//           <iframe
//             src={`https://player.vimeo.com/video/${getVimeoId(video.video_url)}?dnt=1&autoplay=0&loop=0&title=1&byline=1&portrait=1&controls=1`}
//             className="absolute inset-0 w-full h-full"
//             frameBorder="0"
//             allow="autoplay; fullscreen"
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

// // Function to extract Vimeo video ID
// const getVimeoId = url => {
//   const regExp = /vimeo\.com\/(?:video\/)?([0-9]+)/;
//   const match = url.match(regExp);

//   if (match) {
//     return match[1];
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
//     if (video) {
//       // Check if video is from YouTube
//       if (video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be')) {
//         initializeYouTubePlayer();
//       }
//       // Check if video is from Facebook
//       else if (video.video_url.includes('facebook.com')) {
//         initializeFacebookPlayer();
//       }
//     }
//   }, [video]);

//   const initializeYouTubePlayer = () => {
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
//       setTimeout(initializeYouTubePlayer, 100); // Retry initialization
//     }
//   };

//   const initializeFacebookPlayer = () => {
//     // Facebook video URL format: https://www.facebook.com/{page-name}/videos/{video-id}
//     // Embed URL format: https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F{page-name}%2Fvideos%2F{video-id}&width=500&show_text=false&appId=YOUR_APP_ID
//     const facebookVideoId = getFacebookVideoId(video.video_url);
//     if (facebookVideoId) {
//       window.FB && window.FB.init({ appId: 'YOUR_APP_ID', version: 'v13.0' });
//       window.FB && window.FB.XFBML.parse();
//     }
//   };

//   useEffect(() => {
//     if (video && typeof window !== 'undefined') {
//       const scriptTag = document.createElement('script');
//       if (video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be')) {
//         scriptTag.src = 'https://www.youtube.com/iframe_api';
//       } else if (video.video_url.includes('facebook.com')) {
//         scriptTag.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0&appId=YOUR_APP_ID&autoLogAppEvents=1';
//       }
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
//             id={`video-player-${video.id}`}
//           >
//             {/* Render YouTube player */}
//             {video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be') ? (
//               <div id={`youtube-player-${video.id}`} />
//             ) : null}

//             {/* Render Facebook video */}
//             {video.video_url.includes('facebook.com') ? (
//               <div
//                 className="fb-video"
//                 data-href={video.video_url}
//                 data-width="500"
//                 data-show-text="false"
//                 data-app-id="YOUR_APP_ID"
//               />
//             ) : null}
//           </div>
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

// // Function to extract Facebook video ID
// const getFacebookVideoId = url => {
//   const regExp = /\/videos\/([0-9]+)\/?/; // Facebook video URL format
//   const match = url.match(regExp);

//   if (match && match[1]) {
//     return match[1];
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
//     if (video) {
//       // Check if video is from YouTube
//       if (video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be')) {
//         initializeYouTubePlayer();
//       }
//       // Check if video is from Facebook
//       else if (video.video_url.includes('facebook.com')) {
//         initializeFacebookPlayer();
//       }
//     }
//   }, [video]);

//   const initializeYouTubePlayer = () => {
//     if (window.YT && window.YT.Player && video) {
//       new window.YT.Player(`video-player-${video.id}`, {
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
//       setTimeout(initializeYouTubePlayer, 100); // Retry initialization
//     }
//   };

//   const initializeFacebookPlayer = () => {
//     // Load the Facebook SDK asynchronously
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         appId: 'YOUR_APP_ID',
//         xfbml: true,
//         version: 'v13.0'
//       });

//       window.FB.Event.subscribe('xfbml.ready', function (msg) {
//         if (msg.type === 'video' && msg.id === `video-player-${video.id}`) {
//           msg.instance.play();
//         }
//       });
//     };

//     // Load Facebook SDK script
//     (function (d, s, id) {
//       var js,
//         fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s);
//       js.id = id;
//       js.src = 'https://connect.facebook.net/en_US/sdk.js';
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, 'script', 'facebook-jssdk');
//   };

//   useEffect(() => {
//     if (video && typeof window !== 'undefined') {
//       if (video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be')) {
//         const tag = document.createElement('script');
//         tag.src = 'https://www.youtube.com/iframe_api';
//         tag.async = true;
//         tag.onload = initializeYouTubePlayer;
//         document.body.appendChild(tag);
//       } else if (video.video_url.includes('facebook.com')) {
//         initializeFacebookPlayer();
//       }
//     }
//   }, [video, initializePlayer]);

//   if (!video) return <div className="p-4">Loading...</div>;

//   return (
//     <div className="p-4 mx-auto max-w-screen-lg">
//       <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
//       <div className="relative max-w-full overflow-hidden mb-4" style={{ paddingTop: '56.25%' }}>
//         {video.video_url && (
//           <div
//             className="absolute inset-0 w-full h-full"
//             id={`video-player-${video.id}`}
//           >
//             {/* Render YouTube player */}
//             {video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be') ? (
//               <div id={`youtube-player-${video.id}`} />
//             ) : null}

//             {/* Render Facebook video */}
//             {video.video_url.includes('facebook.com') ? (
//               <div
//                 className="fb-video"
//                 data-href={video.video_url}
//                 data-width="500"
//                 data-show-text="false"
//                 data-app-id="YOUR_APP_ID"
//               >
//                 <div className="fb-xfbml-parse-ignore">
//                   <blockquote
//                     cite={video.video_url}
//                     className="fb-xfbml-parse-ignore"
//                   >
//                     <a href={video.video_url}>
//                       Facebook Video
//                     </a>
//                   </blockquote>
//                 </div>
//               </div>
//             ) : null}
//           </div>
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
import { useEffect, useState, useCallback } from 'react';
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

  const initializePlayer = useCallback(() => {
    if (video) {
      // Check if video is from YouTube
      if (video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be')) {
        initializeYouTubePlayer();
      }
      // Check if video is from Facebook
      else if (video.video_url.includes('facebook.com')) {
        initializeFacebookPlayer();
      }
    }
  }, [video]);

  const initializeYouTubePlayer = () => {
    if (window.YT && window.YT.Player && video) {
      new window.YT.Player(`video-player-${video.id}`, {
        videoId: getYoutubeId(video.video_url),
        playerVars: {
          modestbranding: 1, // Minimize YouTube logo in control bar
          rel: 0, // No related videos at end
          fs: 0, // No full screen button
          iv_load_policy: 3, // No video annotations
          disablekb: 1, // Disable keyboard control
          controls: 1, // Show video controls
          autoplay: 0, // Prevent autoplay
          showinfo: 0, // Hide video title and other information
          origin: window.location.origin // Your site origin
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality('hd720');
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              event.target.setPlaybackQuality('hd720');
            }
          }
        }
      });
    } else {
      setTimeout(initializeYouTubePlayer, 100); // Retry initialization
    }
  };

  const initializeFacebookPlayer = () => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'YOUR_APP_ID',
        xfbml: true,
        version: 'v13.0'
      });

      window.FB.Event.subscribe('xfbml.ready', function (msg) {
        if (msg.type === 'video' && msg.id === `video-player-${video.id}`) {
          msg.instance.play();
        }
      });
    };

    // Load Facebook SDK script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  };

  useEffect(() => {
    if (video && typeof window !== 'undefined') {
      if (video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        tag.onload = initializeYouTubePlayer;
        document.body.appendChild(tag);
      } else if (video.video_url.includes('facebook.com')) {
        initializeFacebookPlayer();
      }
    }
  }, [video, initializePlayer]);

  if (!video) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 mx-auto max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <div className="relative max-w-full overflow-hidden mb-4" style={{ paddingTop: '56.25%' }}>
        {video.video_url && (
          <div
            className="absolute inset-0 w-full h-full"
            id={`video-player-${video.id}`}
          >
            {/* Render YouTube player */}
            {video.video_url.includes('youtube.com') || video.video_url.includes('youtu.be') ? (
              <div id={`youtube-player-${video.id}`} />
            ) : null}

            {/* Render Facebook video */}
            {video.video_url.includes('facebook.com') ? (
              <div
                className="fb-video"
                data-href={video.video_url}
                data-width="500"
                data-show-text="false"
                data-allowfullscreen="true"
                data-autoplay="false"
                data-controls="true"
                data-allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              >
                <div className="fb-xfbml-parse-ignore">
                  <blockquote
                    cite={video.video_url}
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href={video.video_url}>
                      Facebook Video
                    </a>
                  </blockquote>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Description:</p>
        <p className="text-gray-700">{video.description}</p>
      </div>
    </div>
  );
};

// Function to extract YouTube video ID
const getYoutubeId = url => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return null;
  }
};

export default VideoPage;
