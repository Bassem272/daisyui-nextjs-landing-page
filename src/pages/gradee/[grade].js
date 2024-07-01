// // pages/gradee/[grade].js
// getServerSideProps is faster than router 
import Chat from "../../components/ChatComponent"; // Ensure the path is correct
import { useRoute , useState } from 'next/router';
import Spinner from "@/components/spinner";
const constant_grade = 'grade1'

const GradeChatPage = ( {grade} ) => {
const [loading, setLoading ] = useState(true) 
    // const routerr = useRouter();
    // const {grade } = routerr.query; // This will give you the grade parameter
    const effective_grade = grade || constant_grade;

  return (
    <div>
      <h1>Chat for Grade {grade} page !!</h1>
      <Chat grade={effective_grade} >
        {grade}
      </Chat>
    </div>
  );
};



// Function to fetch data for the page
export async function getServerSideProps(context) {
    const { grade } = context.params;
    // const { grade } = {
    //     grade: 'grade1'
    // };
    return {
        props: { grade },
    };
}

// Get the grade from the URL and pass it to the component as a prop
export default GradeChatPage;