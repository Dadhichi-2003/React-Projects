import React, { useEffect, useState } from "react";
// import { GetSpaceData } from "./GetData";
import "../styles/space.css";
import { GetData } from "./GetData";

const Space = () => {
  const [space, setSpace] = useState(null);

  useEffect(()=>{
    GetData("https://newsapi.org/v2/everything?q=Space&apiKey=b8d8a5f279af42e7ad8b64b9d6474849").then((Ant)=>{
      setSpace(Ant);
    })
  },[])

  // useEffect(() => {
  //   GetSpaceData().then((Ant) => {
  //     setSpace(Ant);
  //   });
  // }, []);

  return (
    <div className="MAIN-Container">
      {space ? (
        <>
          <div className="Four-Boxes">
            {space.articles
              .filter((e) => e.urlToImage)
              .slice(0, 4)
              .map((e) => {
                return (
                  <div className="image-container">
                    <a href={e.url} target="_blank">
                      <img className="IMAGE" src={e.urlToImage} alt="Space" />
                    </a>
                    <div className="overlay">
                      <p className="title">{e.title}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            {space.articles
              .slice(10, 21)
              .filter((e) => e.urlToImage)
              .map((e) => {
                return (
                  <div className="Container">
                    <div className="inside-container">
                      <a href={e.url} target="_blank">
                        <img
                          className="SpaceImage"
                          src={e.urlToImage}
                          alt="Space"
                        />
                      </a>
                      <p className="Description"> {e.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <>
          <div className="parent-container">
            <p className="loader"></p>
          </div>
        </>
      )}
    </div>
  );
};

export default Space;
