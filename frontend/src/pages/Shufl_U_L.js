import Header from '../Comp/header';
import Footer from '../Comp/footer';
import React, { useState } from 'react';
import './Shufl_U_L.css';

function Shufl_U_L() {
    const [inputText, setInputText] = useState('');
    const [shuffledText, setShuffledText] = useState('');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function shuffleCase(text) {
        let shuffledText = '';
        for (let char of text) {
            if (/[a-zA-Z]/.test(char)) {
                shuffledText += Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
            } else {
                shuffledText += char;
            }
        }
        return shuffledText;
    }

    function shuffleParagraphsAndCase(text) {
        let paragraphs = text.split('\n\n').filter(paragraph => paragraph.trim().length > 0);
        shuffleArray(paragraphs);
        paragraphs = paragraphs.map(paragraph => shuffleCase(paragraph));
        return paragraphs.join('\n\n');
    }

    function shuffleAndDisplay() {
        let shuffledText = shuffleParagraphsAndCase(inputText);
        setShuffledText(shuffledText);
    }

    function copyShuffledText() {
        navigator.clipboard.writeText(shuffledText).then(function() {
            console.log('Shuffled text copied to clipboard');
        }, function(err) {
            console.error('Could not copy shuffled text: ', err);
        });
    }

    return (
        <>
          <Header />
        
        <div>
            <div className="body">
                <h1>Shuffle Paragraphs and Case</h1>

                <div className="left">
                    <label htmlFor="inputText">Enter text:</label><br />
                    <textarea id="inputText" rows="10" cols="50" value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
                    <button onClick={shuffleAndDisplay}>Shuffle Paragraphs and Case</button>
                </div>

                <div className="right">
                    <label htmlFor="shuffledResult">Shuffled Text:</label><br />
                    <textarea id="shuffledResult" rows="10" cols="50" value={shuffledText} onChange={(e) => setInputText(e.target.value)}></textarea>
                    <button onClick={copyShuffledText}>Copy Shuffled Text</button>
                </div>
                
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Shufl_U_L;
