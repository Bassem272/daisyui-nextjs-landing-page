import axios from 'axios';

const getSubjects = async (req, res) => {
  const { gradeId } = req.query;

  try {
    const response = await axios.get(`http://localhost:8000/api/grades/${gradeId}/subjects`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subjects' });
  }
};

export default getSubjects;
