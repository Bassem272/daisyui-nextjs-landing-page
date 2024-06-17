import axios from 'axios';

export default async function handler(req, res) {
    console.log("proxy one");
  const { jobId } = req.query;
  console.log("jobId  proxy",jobId);

  try {
    const response = await axios.get(`http://localhost:8000/articles/get_article/${jobId}/`);
    console.log("response in ther jobid",response);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
