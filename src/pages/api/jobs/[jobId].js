import axios from 'axios';

export default async function handler(req, res) {
    console.log("proxy one");
  const { jobId } = req.query;
  console.log("jobId  proxy",jobId);

  try {
    const response = await axios.get(`http://127.0.0.1:8000/jobs/get/${jobId}/`);
    console.log("response in ther jobId",response);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

