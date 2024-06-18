// pages/articles/index.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

const JobArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/videos')
    
      .then((response) => {
        console.log(response)
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching the articles:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {articles && articles.length > 0 ? (
      articles.map((article) => (
        <div key={article.id} className="mb-2">
          <div className="card w-full bg-base-100 shadow-xl rounded-box">
            <figure className="px-10 pt-10">
              <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Article" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <Link href={`/articles/${article.id}`}>
                  <p>{article.title}</p>
                </Link>
              </h2>
              <div className='flex'>
                <span>Author:</span> <p className='ml-2'>{article.author}</p>
              </div>
              <div className='flex'>
                <span>Date:</span> <p className='ml-2'>{article.date}</p>
              </div>
              <div className="card-actions">
                <Link href={`/articles/${article.id}`}>
                  <button className="btn btn-primary">See Now!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No articles found.</p>
    )}
  </div>
  
  );
};

export default JobArticles;
