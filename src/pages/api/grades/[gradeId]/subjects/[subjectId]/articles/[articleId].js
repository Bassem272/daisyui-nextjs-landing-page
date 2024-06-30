import axios from 'axios';

const getArticle = async (req, res) => {
  const { gradeId, subjectId, articleId } = req.query;

  try {
    const response = await axios.get(`http://localhost:8000/articles/grades/${gradeId}/subjects/${subjectId}/articles/${articleId}/`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch article' });
  }
};

export default getArticle;
