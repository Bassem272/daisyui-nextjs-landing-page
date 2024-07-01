import {
  ClipLoader,
  ClimbingBoxLoader,
  PuffLoader,
  HashLoader,
  PacmanLoader
} from "react-spinners";

const Spinner = ({ loading }) => (
  <div className="flex justify-center items-center h-screen">
    {/* <ClipLoader
      color="red"
      loading={loading}
      size={75}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> */}
    {/* <ClimbingBoxLoader size={16} speedMultiplier={1} color="fuchsia" /> */}
    <PuffLoader color="#ce1ed3" size={60} />
    {/* <PacmanLoader color="#3acc8d" size={25} speedMultiplier={2}/> */}
    {/*
    // <HashLoader  speedMultiplier={2}  />
    
    */}
  </div>
);

export default Spinner;
