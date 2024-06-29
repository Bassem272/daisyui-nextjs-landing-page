import axios from 'axios';

const getGrades = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:8000/api/grades');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch grades' });
  }
};

export default getGrades;
