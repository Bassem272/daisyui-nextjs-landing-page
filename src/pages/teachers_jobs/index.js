// pages/teachers_jobs/index.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

const JobArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/teachers_jobs')
    
      .then((response) => {
        console.log(response)
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching the articles:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Job Articles</h1>
      <ul>
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <li key={article.id} className="mb-2">
              <Link href={`/teachers_jobs/${article.id}`}>
                <p>
                {article.title}
                </p>
              </Link>
            </li>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </ul>
    </div>
  );
};

export default JobArticles;
