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
        .then((response) => setArticles(response.data.articles))
        .catch((error) => console.error('Error fetching articles:', error));
    }
  }, [gradeId, subjectId]);
  console.log("artiles", articles)

  return (
    // <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //   {articles.map((article) => (
    //     <div key={article.id} className="card w-full bg-base-100 shadow-xl rounded-box">
    //       <div className="card-body items-center text-center">
    //         <h2 className="card-title">
    //           <Link href={`/grades/${gradeId}/subjects/${subjectId}/articles/${article.id}`}>
    //             <a>{article.title}</a>
    //           </Link>
    //         </h2>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
    <h1>Articles</h1>
    <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {articles && articles.length > 0 ? (
  articles.map((article) => (
  
  <div key={article} className="mb-2">
    <Link href={`/grades/${gradeId}/subjects/${subjectId}/articles/${article.id}`}>
    <div className="card w-full bg-base-100 shadow-xl rounded-box">
      <figure className="px-10 pt-10">
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Article" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
        <Link href={`/grades/${gradeId}/subjects/${subjectId}/articles/${article.id}`} legacyBehavior>
            <a>{article.title}</a>
          </Link>
        </h2>
       
        <div className="card-actions">
          <Link href={`/grades/${gradeId}/subjects/${subjectId}/articles/${article.id}`}>
            <button className="btn btn-primary">See Now!</button>
          </Link>
        </div>
      </div>
    </div>
    </Link>
  
  </div>
  ))
  ) : (
  <p>No articles found.</p>
  )}
  </div>
  </div>
  );
};

export default Articles;
