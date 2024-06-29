import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Grades = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    axios.get('/api/grades')
      .then((response) => setGrades(response.data))
      .catch((error) => console.error('Error fetching grades:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {grades.map((grade) => (
        <div key={grade.id} className="card w-full bg-base-100 shadow-xl rounded-box">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <Link href={`/grades/${grade.id}/subjects`}>
                <a>{grade.name}</a>
              </Link>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grades;
