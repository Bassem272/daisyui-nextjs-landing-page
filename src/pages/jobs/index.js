// pages/jobs/index.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/components/spinner';
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading , setLoading ] = useState(true) 
  useEffect(() => {
    axios.get('/api/jobs')
    
      .then((response) => {
        console.log(response)
        setJobs(response.data.jobs);
        console.log(response.data.jobs)
        const jobs = response.data.jobs;
        const ids = jobs.map((job) => {
          return {
            idx:{
              "id":job.id}
            }
            });
        console.log(ids)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching the jobs:', error);
        setLoading(false)
      });
    }, []);
    if(loading ) return <Spinner loading={loading} />
  return (
    <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {jobs && jobs.length > 0 ? (
      jobs.map((job) => (
        <div key={job.id} className="mb-2">
          <div className="card w-full bg-base-100 shadow-xl rounded-box">
            <figure className="px-10 pt-10">
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Article" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <Link href={`/jobs/${job.id}`}>
                  { job.id}
                  <p>{job.title}</p>
                </Link>
              </h2>
              <div className='flex'>
                <span>Author:</span> <p className='ml-2'>{job.author}</p>
              </div>
              <div className='flex'>
                <span>Date:</span> <p className='ml-2'>{job.date}</p>
              </div>
              <div className="card-actions">
                <Link href={`/jobs/${job.id}`}>
                  <button className="btn btn-primary">See Now!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No jobs found.</p>
    )}
  </div>
  
  );
};

export default Jobs;
