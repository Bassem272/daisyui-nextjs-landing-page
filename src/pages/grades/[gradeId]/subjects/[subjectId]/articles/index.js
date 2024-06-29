import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Articles = () => {
  const router = useRouter();
  const { gradeId, subjectId } = router.query;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (subjectId) {
      axios.get(`/api/grades/${gradeId}/subjects/${subjectId}/articles`)
        .then((response) => setArticles(response.data))
        .catch((error) => console.error('Error fetching articles:', error));
    }
  }, [gradeId, subjectId]);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {articles.map((article) => (
        <div key={article.id} className="card w-full bg-base-100 shadow-xl rounded-box">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <Link href={`/grades/${gradeId}/subjects/${subjectId}/articles/${article.id}`}>
                <a>{article.title}</a>
              </Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
