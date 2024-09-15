import React, { useEffect, useState } from "react";
// import { TopHead } from "./GetData";
import "../styles/Top.css";
import { GetData } from "./GetData";

const Top = () => {
  const [topHead, setTopHead] = useState(null);

  useEffect(()=>{
    GetData("https://newsapi.org/v2/everything?q=india&apiKey=b8d8a5f279af42e7ad8b64b9d6474849").then((Top)=>{
      setTopHead(Top);
    })
  },[])

  // useEffect(() => {
  //   TopHead().then((Top) => {
  //     setTopHead(Top);
  //   });
  // }, []);

  return (
    <section>
      <p className="HEADING">TOP NEWS OF THE DAY </p>
      <div className="box">
        {topHead ? (
          <>
            {topHead.articles
              ?.filter((e) => e.urlToImage)
              .slice(0, 12) // it will check whether data is complete or not(amuk ma fota nota)
              .map((e) => {
                return (
                  <div className="Box">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={e.urlToImage}
                        alt="Top"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          {e.description?.slice(0, 80)}...
                        </p>
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-secondary"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          <p className="loader"></p>
        )}
      </div>
    </section>
  );
};

export default Top;
