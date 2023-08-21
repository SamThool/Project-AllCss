import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="inputBox">
        <input
          className="home-input"
          type="text"
          placeholder="Search Style"
          required
        />
      </div>
    </div>
  );
};

export default Home;
