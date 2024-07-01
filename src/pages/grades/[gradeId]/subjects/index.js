import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Spinner from "../../../../components/spinner"; // Adjust the path as needed
const Subjects = () => {
  const router = useRouter();
  const { gradeId } = router.query;
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (gradeId) {
      axios.get(`/api/grades/${gradeId}/subjects`)
      .then((response) => {setSubjects(response.data.subjects)
        
        
        setLoading(false)
      }
    )
    .catch((error) =>{ console.error('Error fetching subjects:', error)
      setLoading(false)
    });
  }
}, [gradeId]);
console.log(subjects)
if (loading) return <Spinner loading={loading} />;
return (
  
  
  <div>
  <h1>Subjects</h1>
  <div className="grid grid-cols-1 gap-4 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{subjects && subjects.length > 0 ? (
subjects.map((subject) => (

<div key={subject} className="mb-2">
  <Link href={`/grades/${gradeId}/subjects/${subject}/articles`}>
  <div className="card w-full bg-base-100 shadow-xl rounded-box">
    <figure className="px-10 pt-10">
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Article" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">
      <Link href={`/grades/${gradeId}/subjects/${subject}/articles`} legacyBehavior>
          <a>{subject}</a>
        </Link>
      </h2>
     
      <div className="card-actions">
        <Link href={`/grades/${gradeId}/subjects/${subject}/articles`}>
          <button className="btn btn-primary">See Now!</button>
        </Link>
      </div>
    </div>
  </div>
  </Link>

</div>
))
) : (
<p>No subjects found.</p>
)}
</div>
</div>
 );
};

export default Subjects;
