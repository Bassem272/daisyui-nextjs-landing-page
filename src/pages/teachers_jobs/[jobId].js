import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const JobArticle = () => {
  const router = useRouter();
  const { jobId } = router.query;
  console.log('jobId:', jobId);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (jobId) {
        console.log('Fetching one article...');
      axios.get(`/api/teachers_jobs/${jobId}`).then((response) => {
       console.log('Fetched article:', response.data);
        setArticle(response.data.article_data);
      }).catch(error => {
        console.error('Error fetching the article:', error);
      });
    }
  }, [jobId]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <h2 className="text-xl mb-4">By {article.author}</h2>
      <p>{article.date}</p>
      <div className="article-content">
        {article.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="tags">
        {article.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default JobArticle;
