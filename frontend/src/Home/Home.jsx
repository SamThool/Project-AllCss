import "./home.css";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import ResultBox from "../Component/ResultBox/ResultBox";
const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <div className="inputBox">
          <input
            className="home-input"
            type="text"
            placeholder="Search Style"
            required
          />
        </div>
        <ResultBox />
        <ResultBox />
        <ResultBox />
        <ResultBox />
      </div>
      <Footer />
    </>
  );
};

export default Home;
