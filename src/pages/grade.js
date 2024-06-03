// // pages/grade/

const constant_grade = 'grade1'
import Chat from "../components/ChatComponent"; // Ensure the path is correct



const GradeChatPage = ( {grade} ) => {
    const effective_grade = grade || constant_grade;

  return (
    <div>
      <h1>Chat for Grade {grade}</h1>
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
export default GradeChatPage;