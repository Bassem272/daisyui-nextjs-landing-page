// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const JobArticle = () => {
//   const router = useRouter();
//   const { articleId } = router.query;
//   console.log('jobId:', jobId);
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     if (jobId) {
//         console.log('Fetching one article...');
//       axios.get(`/api/teachers_jobs/${jobId}`).then((response) => {
//        console.log('Fetched article:', response.data);
//         setArticle(response.data.article_data);
//       }).catch(error => {
//         console.error('Error fetching the article:', error);
//       });
//     }
//   }, [jobId]);

//   if (!article) return <div>Loading...</div>;

//   return (
//     <div className="p-4">
//     <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
//     <h2 className="text-xl mb-4">By {article.author}</h2>
//     <p>{article.date}</p>
//     <div className="article-content">
//       {article.content.map((item, index) => {
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
//       {article.tags.map((tag, index) => (
//         <span key={index} className="tag">{tag}</span>
//       ))}
//     </div>
//   </div>
// );
// };

// export default JobArticle;

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const JobArticle = () => {
  const router = useRouter();
  const { articleId } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articleId) {
      axios.get(`/api/articles/${articleId}`).then((response) => {
        setArticle(response.data.article_data);
      }).catch(error => {
        console.error('Error fetching the article:', error);
      });
    }
  }, [articleId]);

  if (!article) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="p-6 bg-base-100 shadow-xl rounded-lg max-w-4xl mx-auto mt-5">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <h2 className="text-xl mb-4 text-gray-500">By {article.author}</h2>
      <p className="text-gray-400 mb-6">{article.date}</p>
      <div className="article-content space-y-4">
        {article.content.map((item, index) => {
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
        {article.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mr-2">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default JobArticle;
