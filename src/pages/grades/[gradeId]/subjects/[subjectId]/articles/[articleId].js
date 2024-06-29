import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Article = () => {
  const router = useRouter();
  const { gradeId, subjectId, articleId } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articleId) {
      axios.get(`/api/grades/${gradeId}/subjects/${subjectId}/articles/${articleId}`)
        .then((response) => setArticle(response.data))
        .catch((error) => console.error('Error fetching article:', error));
    }
  }, [gradeId, subjectId, articleId]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.date}</p>
      <div>
        {article.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === 'image') {
            return (
              <div key={index}>
                <img src={item.url} alt={item.caption} />
                <p>{item.caption}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Article;
