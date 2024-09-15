import React, { Fragment, useEffect, useState } from "react";

import "../styles/Sports.css";
import { GetData } from "./GetData";

const Sport = () => {
  const [SportNews, setSportNews] = useState(null);

  useEffect(()=>{
    GetData("https://newsapi.org/v2/everything?q=sport&apiKey=b8d8a5f279af42e7ad8b64b9d6474849")
    .then((sprt)=>{
      setSportNews(sprt);
    })
  },[])

  // useEffect(() => {
  //   GetSports().then((sprt) => {
  //     setSportNews(sprt);
  //   });
  // }, []);

  return (
    <>
      <p className="HEADING">SPORTS KHABREY</p>
      <div className="Container">
        {SportNews ? (
          <Fragment>
            {SportNews.articles
              .slice(0, 30)
              .filter((el) => el.urlToImage)
              .map((el) => {
                return (
                  <>
                    <div className="Inside-container">
                      <a href={el.url} target="_blank" rel="noreferrer">
                        <img
                          className="Sport-Image"
                          src={el.urlToImage}
                          alt="Photos"
                        />
                      </a>
                      <p className="Description">
                        {" "}
                        {el.description.slice(0, 400)}..
                      </p>
                    </div>
                  </>
                );
              })}
          </Fragment>
        ) : (
          <div className="parent-container">
            <p className="loader"></p>
          </div>
        )}
      </div>
    </>
  );
};

export default Sport;
