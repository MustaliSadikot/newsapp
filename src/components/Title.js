import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./loader";
import LoadingBar from "react-top-loading-bar";
import InfiniteScroll from "react-infinite-scroll-component";

function Title(props) {
  const category = props.category
  const [progress, setProgress] = useState(0);
  const [articles, updatenews] = useState([]);
  const [total, updateTotal] = useState(0);
  const [page, updatePage] = useState(1);
  const mode = props.mode;
  const news = props.news;

  const getnews = async () => {
    
    setProgress(25);
    const data1 = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=7b70d77664df475498ac9a68f0dd75bf&pagesize=6&page=1`
    );
    setProgress(50);
    const paraseData = await data1.json();
    setProgress(70);
    console.log(paraseData);
    updatenews(paraseData.articles);
    setProgress(100);
    updateTotal(paraseData.totalResults);
  };
  const getMoreNews = async () => {
    updatePage(page+1)
    setProgress(25);
    const data1 = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=7b70d77664df475498ac9a68f0dd75bf&pagesize=6&page=${page+1}`
    );
    setProgress(50);
    const paraseData = await data1.json();
    setProgress(70);
    console.log(paraseData);
    updatenews(articles.concat(paraseData.articles));
    setProgress(100);
  };

  useEffect(() => {
    getnews();
  }, [category]);

  return (
    <>
      <LoadingBar
        color={!mode ? "#EBE834" : "#0B5ED7"}
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />
      
      <h1
        className={`text-center mt-4 mb-5 text-${
          mode ? "dark" : "light"
        } text-decoration-underline`}
      >
        DailyNews -{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
        Headlines
      </h1>
      <div className="container">
        <div className={`row row-cols-1 row-cols-md-2 g-4 pb-4`}>
          {articles.map((element,index)=>{
          return <Card key={index} mode={mode} news={element}/>
        })}
          
        </div>
        <InfiniteScroll 
            dataLength={articles.length}
            hasMore={articles.length != total}
            loader={<Loader />}
            next={getMoreNews}
          />
      </div>
    </>
  );
}

export default Title;
