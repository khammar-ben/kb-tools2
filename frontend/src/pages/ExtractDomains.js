import Header from '../Comp/header';
import Footer from '../Comp/footer';
import React, { useState } from 'react';
import './ExtractDomains.css';

function extractDomains(text) {
    var urlRegex = /_?(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.(?:[A-Za-z]{2,6}|xn--[A-Za-z0-9]{1,59})(?:\.[A-Za-z]{2,6}|xn--[A-Za-z0-9]{1,59})*_?/g;
    var matches = text.match(urlRegex);
    if (!matches) return [];
    var domains = matches.map(function(url) {
        var domain = url.replace(/(?:https?:\/\/)?(?:www\.)?/, '');
        domain = domain.replace(/_/g, '');
        return domain.split('/')[0];
    });
    return domains;
}

function ExtractDomains() {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');

    const handleExtractDomains = () => {
        const domains = extractDomains(inputText);
        if (domains.length === 0) {
            setResultText('No domains found.');
        } else {
            setResultText(domains.join('\n'));
        }
    };

    const handleCopyDomains = () => {
        navigator.clipboard.writeText(resultText).then(() => {
            console.log('Domains copied to clipboard');
        }, (err) => {
            console.error('Could not copy domains: ', err);
        });
    };

    return (
        <><Header /> 
        <div className="body">
            <h1>Domain Extractor</h1>
            <div  >
            <label htmlFor="inputText">Enter text:</label><br />
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows="10"
                cols="50"
            ></textarea><br />
            <button onClick={handleExtractDomains}>Extract Domains</button>
            </div>
            <div className='zone'>
            <label htmlFor="inputText">Domaines Extraxted:</label><br />
            <textarea
                value={resultText}
                readOnly
                rows="10"
                cols="50"
            ></textarea><br />
            <button onClick={handleCopyDomains}>Copy Domains</button>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default ExtractDomains;
