import React, { useEffect, useState } from "react";
// import { GetHeadLines } from "./GetData";
import "../styles/Headlines.css";

import { GetData } from "./GetData";

const HeadLines = () => {
  const [headlines, setHeadLines] = useState(null);


  useEffect(()=>{
    GetData('https://newsapi.org/v2/top-headlines?country=us&apiKey=b8d8a5f279af42e7ad8b64b9d6474849').then((lines)=>{
      setHeadLines(lines);
    })
  },[])

  // useEffect(() => {
  //   GetHeadLines().then((lines) => {
  //     setHeadLines(lines);
  //   });
  // }, []);

  return (
    <div className="scrolling-container">
      <section className="scrolling-content">
        {headlines ? (
          <>
            {headlines.articles.map((head) => (
              <li className="headline-item">{head.title}</li>
            ))}
          </>
        ) : (
          <p className="load1">...</p>
        )}
      </section>
    </div>
  );
};

export default HeadLines;
