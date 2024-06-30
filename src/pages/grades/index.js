import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Grades = () => {
  const [grades, setGrades] = useState([]);
   console.log("hiiiiiii>>>>")
  useEffect(() => {
    axios.get('/api/grades')
      .then((response) => setGrades(response.data.grades))
      // console.log(response.data.grades)
      .catch((error) => console.error('Error fetching grades:', error));
  }, []);

  return (
    // <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //   {grades.map((grade) => (
    //     <div key={grade.id} className="card w-full bg-base-100 shadow-xl rounded-box">
    //       <div className="card-body items-center text-center">
    //         <h2 className="card-title">
    //           <Link href={`/grades/${grade.id}/subjects`}>
    //             <a>{grade.name}</a>
    //           </Link>
    //         </h2>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      <h1>Grades</h1>
      <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{grades && grades.length > 0 ? (
  grades.map((grade) => (
    
    <div key={grade} className="mb-2">
      <Link href={`/grades/${grade}/subjects`}>
      <div className="card w-full bg-base-100 shadow-xl rounded-box">
        <figure className="px-10 pt-10">
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Article" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
          <Link href={`/grades/${grade}/subjects`} legacyBehavior>
              <a>{grade}</a>
            </Link>
          </h2>
         
          <div className="card-actions">
            <Link href={`/grades/${grade}/subjects`}>
              <button className="btn btn-primary">See Now!</button>
            </Link>
          </div>
        </div>
      </div>
      </Link>

    </div>
  ))
) : (
  <p>No grades found.</p>
)}
</div>
    </div>
  );
};

export default Grades;
