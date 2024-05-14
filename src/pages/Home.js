import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>Home</h1>
        <div>
          <Link to="/data">Show All Data</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
