import Header from '../Comp/header';
import Footer from '../Comp/footer';
import React, { useState } from 'react';
import './TextToHtml.css';

const TextToHtml = () => {
  const [inputText, setInputText] = useState('');
  const [shuffledResult, setShuffledResult] = useState('');

  const shuffleLinesAndParagraphs = () => {
    // Split text into paragraphs
    const paragraphs = inputText.split("\n\n");

    // Iterate through paragraphs and split into lines
    const array = paragraphs.map(paragraph => {
      const lines = paragraph.split("\n");
      return lines.map(line => "<p>" + line + "</p>").join('\n');
    });

    setShuffledResult(array.join('\n\n'));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shuffledResult);
    alert('Shuffled text copied to clipboard!');
  };

  return (
    <>
      <Header />
    
    <div className="body">
      <h1>Text To Html</h1>
      <div className="left">
        <label htmlFor="inputText">Enter text:</label><br />
        <textarea
          id="inputText"
          rows="10"
          cols="50"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button onClick={shuffleLinesAndParagraphs}>Shuffle Lines and Paragraphs</button>
      </div>
      
      <div className="right">
        <label htmlFor="shuffledResult">Html Version:</label><br />
        <textarea
          id="shuffledResult"
          rows="10"
          cols="50"
          value={shuffledResult}
          readOnly
        ></textarea>
        <button onClick={copyToClipboard}>Copy Shuffled Text</button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TextToHtml;
