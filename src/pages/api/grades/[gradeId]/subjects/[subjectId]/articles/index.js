import axios from 'axios';

const getArticles = async (req, res) => {
  const { gradeId, subjectId } = req.query;

  try {
    const response = await axios.get(`http://localhost:8000/api/grades/${gradeId}/subjects/${subjectId}/articles`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

export default getArticles;
