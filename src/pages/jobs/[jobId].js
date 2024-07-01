// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Jobjob = () => {
//   const router = useRouter();
//   const { jobId } = router.query;
//   console.log('jobId:', jobId);
//   const [job, setjob] = useState(null);

//   useEffect(() => {
//     if (jobId) {
//         console.log('Fetching one job...');
//       axios.get(`/api/teachers_jobs/${jobId}`).then((response) => {
//        console.log('Fetched job:', response.data);
//         setjob(response.data.job_data);
//       }).catch(error => {
//         console.error('Error fetching the job:', error);
//       });
//     }
//   }, [jobId]);

//   if (!job) return <div>Loading...</div>;

//   return (
//     <div className="p-4">
//     <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
//     <h2 className="text-xl mb-4">By {job.author}</h2>
//     <p>{job.date}</p>
//     <div className="job-content">
//       {job.content.map((item, index) => {
//         if (item.type === 'paragraph') {
//           return <p key={index}>{item.content}</p>;
//         } else if (item.type === 'image') {
//           return (
//             <div key={index} className="my-4">
//               <img src={item.url} alt={item.caption} className="w-full h-auto"/>
//               <p className="text-sm text-gray-600">{item.caption}</p>
//             </div>
//           );
//         }
//         return null;
//       })}
//     </div>
//     <div className="tags">
//       {job.tags.map((tag, index) => (
//         <span key={index} className="tag">{tag}</span>
//       ))}
//     </div>
//   </div>
// );
// };

// export default Jobjob;

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/components/spinner';
const Job = () => {
  const router = useRouter();
  const { jobId } = router.query;
  const [job, setJob] = useState(null);
  const [loading , setLoading ] = useState(true)
  console.log('jobId: jobjslool', jobId);

  useEffect(() => {
    if (jobId) {
      axios.get(`/api/jobs/${jobId}`).then((response) => {
        setJob(response.data.job_data);
        console.log('Fetched job:', response.data.job_data);
        setLoading(false)
      }).catch(error => {
        console.error('Error fetching the job:', error);
        setLoading(false)
      });
    }
  }, [jobId]);

  if (loading) return <Spinner loading={loading} />

  return (
    <div className="p-6 bg-base-100 shadow-xl rounded-lg max-w-4xl mx-auto mt-5">
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
      <h2 className="text-xl mb-4 text-gray-500">By {job.author}</h2>
      <p className="text-gray-400 mb-6">{job.date}</p>
      <div className="job-content space-y-4">
        {job.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index} className="text-lg leading-relaxed">{item.content}</p>;
          } else if (item.type === 'image') {
            return (
              <div key={index} className="my-4">
                <figure>
                  <img src={item.url} alt={item.caption} className="w-full h-auto rounded-lg shadow-md"/>
                  <figcaption className="text-sm text-gray-500 mt-2">{item.caption}</figcaption>
                </figure>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="tags mt-6">
        {job.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mr-2">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Job;
