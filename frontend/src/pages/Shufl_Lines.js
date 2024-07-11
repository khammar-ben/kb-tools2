import Header from '../Comp/header';
import Footer from '../Comp/footer';
import React, { useState } from 'react';
import './Shufl_Lines.css';

function Shufl_Lines() {
  const [inputText, setInputText] = useState('');
  const [shuffledText, setShuffledText] = useState('');

  const shuffleLinesAndParagraphs = (text) => {
    const paragraphs = text.split('\n\n');
    const shuffledParagraphs = paragraphs.sort(() => 0.5 - Math.random());

    for (let i = 0; i < shuffledParagraphs.length; i++) {
      const lines = shuffledParagraphs[i].split('\n');
      shuffledParagraphs[i] = lines.sort(() => 0.5 - Math.random()).join('\n');
    }

    return shuffledParagraphs.join('\n\n');
  };

  const shuffleAndDisplay = () => {
    const result = shuffleLinesAndParagraphs(inputText);
    setShuffledText(result);
  };

  const copyShuffledText = () => {
    navigator.clipboard.writeText(shuffledText).then(
      () => {
        console.log('Shuffled text copied to clipboard');
      },
      (err) => {
        console.error('Could not copy shuffled text: ', err);
      }
    );
  };

  return (
    <>
      <Header />
 
    <div className="body">
      <h1>Text Shuffler</h1>
      <div className="left">
        <label htmlFor="inputText">Enter text:</label><br />
        <textarea
          id="inputText"
          rows="10"
          cols="50"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button onClick={shuffleAndDisplay}>Shuffle Lines and Paragraphs</button>
      </div>
     

      <div className="right">
        <label htmlFor="shuffledResult">Shuffled Text:</label><br />
        <textarea
          id="shuffledResult"
          rows="10"
          cols="50"
          value={shuffledText}
          readOnly
        ></textarea>
         <button onClick={copyShuffledText}>Copy Shuffled Text</button>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Shufl_Lines;
