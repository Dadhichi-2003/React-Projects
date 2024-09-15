import React, { useState } from "react";

const Text = () => {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);
  const [bullets, setBullets] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const toUppercase = () => {
    let Upper = text.toUpperCase();
    setText(Upper);
  };

  const toLowercase = () => {
    let Lower = text.toLowerCase();
    setText(Lower);
  };

  const toClear = () => {
    let newtext = "";
    setText(newtext);
  };
  const toCopy = () => {
    let copyText = document.getElementById("textArea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    showAlert("Text copied to clipboard!");
  };

  const replaceText = () => {
    let wordToReplace = prompt("Enter the word you want to replace:");
    let newWord = prompt("Enter the new word:");
    if (wordToReplace && newWord) {
      let newText = text.replaceAll(wordToReplace, newWord);
      setText(newText);
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };
  const extractEmails = () => {
    let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    let foundEmails = text.match(emailRegex);
    setEmails(foundEmails || []);

    let mail = document.getElementById("email");
    mail.style.display = "block";
  };
  const copyEmails = () => {
    if (emails.length > 0) {
      let emailText = emails.join(", ");
      navigator.clipboard.writeText(emailText);
      showAlert("Emails copied to clipboard!");
    } else {
      showAlert("No emails to copy.");
    }
  };

  const convertToBullets = () => {
    // Split the text into bullet points by sentences (using period or newline as separator)
    let newBullets = text.split(/[.!?]\s+/);
    setBullets(newBullets.filter((bullet) => bullet.length > 0));
    let bullet = document.getElementById("bullets");
    bullet.style.display = "block";
  };

  const copyBullets = () => {
    if (bullets.length > 0) {
      let bulletText = bullets.map((bullet) => `• ${bullet}`).join("\n");
      navigator.clipboard.writeText(bulletText);
      showAlert("Bullet points copied to clipboard!");
    } else {
      showAlert("No bullet points to copy.");
    }
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage("");
    }, 2000);
  };

  return (
    <div className="container">
       <div className="subcontainer">
          <h1> TEXT UTILS</h1>
        <img src=""/>
        <textarea
          id="textArea"
          type="text"
          rows={20}
          cols={100}
          onChange={handleChange}
          value={text}
        />
        <p>
          {
            text.split(" ").filter((e) => {
              return e.length != 0;
            }).length
          }
          words and
          {text.length} characters
        </p>
        
      </div>
      <div className="btn">
      <button onClick={toUppercase}><i className="fas fa-font"></i> ABC</button>
<button onClick={toLowercase}><i className="fas fa-text-height"></i> abc</button>
<button onClick={toClear}><i className="fas fa-eraser"></i> Clear</button>
<button onClick={toCopy}><i className="fas fa-copy"></i> Copy</button>
<button onClick={replaceText}><i className="fas fa-exchange-alt"></i> Replace</button>
<button onClick={handleExtraSpaces}><i className="fas fa-compress-alt"></i> Remove Extra spaces</button>
<button onClick={convertToBullets}><i className="fas fa-list-ul"></i> Convert to Bullet Points</button>
<button onClick={extractEmails}><i className="fas fa-at"></i> Extract emails</button>
        
      </div>
      <div id="email">
        <h3>Extracted Emails:</h3>
        {emails.length > 0 ? (
          <>
            <ul>
              {emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
            <button onClick={copyEmails}><i className="fas fa-envelope"></i> copy mails</button>
          </>
        ) : (
          <p>No emails found</p>
        )}
      </div>
      <div id="bullets">
        <h3>Bullet Points:</h3>
        {bullets.length > 0 ? (
          <>
            <ul>
              {bullets.map((bullet, index) => (
                <li key={index}> • {bullet} </li>
              ))}
            </ul>
            <button onClick={copyBullets}><i className="fas fa-clipboard-list"></i> copy points</button>
          </>
        ) : (
          <p>No bullet points available</p>
        )}
      </div>
      {alertMessage && (
      <div className={`alert ${alertMessage ? 'show' : ''}`}>
        {alertMessage}
      </div>
    )}
    </div>
  );
};

export default Text;
