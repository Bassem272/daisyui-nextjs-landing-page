import axios from 'axios';

export default async function handler(req, res) {
  const { grade, videoId } = req.query;
  
  try {
    const response = await axios.get(`http://127.0.0.1:8000/videos/${grade}/${videoId}/`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
