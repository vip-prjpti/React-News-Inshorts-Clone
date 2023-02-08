import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apiKey from "./data/config";
import Footer from "./components/Footer/Footer"

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://${proxyUrl}newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, newsResults]);

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults}/>
      <Footer/>
    </div>
  );
}

export default App;
