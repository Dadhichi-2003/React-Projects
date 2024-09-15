import React, { useContext } from "react";
import { DetailsContext } from "./DetailsProvider";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Card(props) {
  const { details } = useContext(DetailsContext);

  const GenerateCard = (id) => {
    const card = document.getElementById(id);
    html2canvas(card).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [130, 70],
      });
      pdf.addImage(imgData, "PNG", 0, 0, 130, 70);
      pdf.save("card.pdf");
    });
  };

  return (
    <div className="container d-flex flex-wrap">
      <div
        id="Card1"
        className="C1 container my-5"
        onClick={() => GenerateCard("Card1")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1> {details.name}</h1>
          <h3>{details.position}</h3>
        </div>
        <div className="my-4 C1C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>
      <div
        id="Card2"
        className="C2 container my-5"
        onClick={() => GenerateCard("Card2")}
        style={{ cursor: "pointer" }}
      >
        <div className="C1C">
          <h1> {details.name}</h1>
          <h3>{details.position}</h3>
        </div>
        <div className="my-4 C1C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>
      <div
        id="Card3"
        className="C3 container my-5"
        onClick={() => GenerateCard("Card3")}
        style={{ cursor: "pointer" }}
      >
        <div className="">
          <h1> {details.name}</h1>
          <h3>{details.position}</h3>
        </div>
        <div className="my-4 C1C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>
      <div
        id="Card4"
        className="C4  card container my-5"
        onClick={() => GenerateCard("Card4")}
        style={{ cursor: "pointer" }}
      >
        <div className="  ">
          <h2> {details.name}</h2>
          <p>({details.position})</p>
        </div>

        <div className="my-4 C4C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>
      <div
        id="Card5"
        className="C5  card container my-5"
        onClick={() => GenerateCard("Card5")}
        style={{ cursor: "pointer" }}
      >
        <div className="  ">
          <h2> {details.name}</h2>
          <p style={{color: 'rgb(0, 0, 105)'}}>({details.position})</p>
        </div>

        <div className="my-4 C4C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>

      <div
        id="Card6"
        className="C6 card container my-5"
        onClick={() => GenerateCard("Card6")}
        style={{ cursor: "pointer" }}
      >
        <div className="  ">
          <h2> {details.name}</h2>
          <p>({details.position})</p>
        </div>

        <div className="my-4 C4C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>
      <div
        id="Card7"
        className="C7 col-md-3 card container my-5"
        onClick={() => GenerateCard("Card7")}
        style={{ cursor: "pointer" }}
      >
        <div className="  ">
          <h2> {details.name}</h2>
          <p>({details.position})</p>
        </div>

        <div className="my-4 C4C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>
      <div
        id="Card8"
        className="C8 col-md-3 card container my-5"
        onClick={() => GenerateCard("Card8")}
        style={{ cursor: "pointer" }}
      >
        <div className="  ">
          <h2> {details.name}</h2>
          <p>({details.position})</p>
        </div>

        <div className="my-4 C4C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>
      <div
        id="Card9"
        className="C9 col-md-3 card container my-5"
        onClick={() => GenerateCard("Card9")}
        style={{ cursor: "pointer" }}
      >
        <div className="  ">
          <h2> {details.name}</h2>
          <p>({details.position})</p>
        </div>

        <div className="my-4 C4C">
          <span> {details.place}</span>
          <span>{details.number} </span>
          <span> {details.email}</span>
          {details.dynamicFields &&
            details.dynamicFields.map((field, index) => (
              <p key={index}>{`${field.label}: ${field.value}`}</p>
            ))}
        </div>
      </div>

    </div>
  );
}

export default Card;
