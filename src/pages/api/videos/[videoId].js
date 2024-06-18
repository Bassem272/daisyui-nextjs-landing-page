import axios from 'axios';

export default async function handler(req, res) {
    console.log("proxy one");
  const { articleId } = req.query;
  console.log("articleId  proxy",articleId);

  try {
    const response = await axios.get(`http://localhost:8000/articles/get_article/${articleId}/`);
    console.log("response in ther articleId",response);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
