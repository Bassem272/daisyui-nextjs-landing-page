import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const VideosPage = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    axios.get('/api/videos')
      .then(response => {
        setGrades(response.data.grades);
      })
      .catch(error => {
        console.error('Error fetching grades:', error);
      });
  }, []);

  return (
    <div>
      <h1>Grades</h1>
      <div>
        {grades.map((grade) => (
          <div key={grade}>
            <Link href={`/videos/${grade}`}>
              <a>{grade}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
