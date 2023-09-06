import LogIn from "../userAuth/LogIn";

const Home = () => {
  return (
    <div className="mt-32">
      <div className="mb-12 text-center">
        <p className="text-xl text-gray-600 font-semibold">
          Welcome to
          <br />
          <span className="text-3xl text-blue-600">Collab Task Manager</span>
        </p>
      </div>
      <div>
        <LogIn />
      </div>
    </div>
  );
};

export default Home;
