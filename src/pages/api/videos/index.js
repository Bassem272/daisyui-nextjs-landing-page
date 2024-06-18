import axios from 'axios';

export default async function handler(req, res) {
  try {
    console.log('we are proxy T~`~T')
    const response = await axios.get('http://localhost:8000/articles/');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
