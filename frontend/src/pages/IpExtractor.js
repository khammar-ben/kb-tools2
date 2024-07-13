import Header from '../Comp/header';
import Footer from '../Comp/footer';
import React, { useState } from 'react';
import './IpExtractor.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const IpExtractor = () => {
  const [inputText, setInputText] = useState('');
  const [ips, setIps] = useState([]);
  const [error, setError] = useState('');
  const [extractedText, setExtractedText] = useState('');

  const extractIPs = (text) => {
    const ipRegex = /(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g;
    const matches = text.match(ipRegex);
    const uniqueIPs = matches ? Array.from(new Set(matches)) : [];
    return uniqueIPs;
  };

  const copyIPs = () => {
    navigator.clipboard.writeText(extractedText).then(() => {
      console.log('IP addresses copied to clipboard');
    }).catch(err => {
      console.error('Could not copy IP addresses: ', err);
    });
  };

  const displayIPs = () => {
    const extractedIPs = extractIPs(inputText);
    if (extractedIPs.length === 0) {
      setError('No IP addresses found.');
      setIps([]);
      setExtractedText('');
    } else {
      setError('');
      setIps(extractedIPs);
      setExtractedText(extractedIPs.join('\n'));
    }
  };

  return (
    <>
      <Header />
      <div className="body">


        <h1>IP Address Extractor</h1>
        <div> 
        <br/><br/>
          <label htmlFor="inputText">Enter text:</label>  
          <textarea
            style={{ margin: '20px' }}
            id="inputText"
            rows="5"
            cols="50"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          
          <button className="btn btn-primary" onClick={displayIPs}>Extract IP Addresses</button>
        </div>

        <div className='Zone'>
        <label htmlFor="inputText">Ips Extracted:</label>
          <textarea
            id='result'
            style={{ margin: '20px' }}
            rows="5"
            cols="50"
            value={extractedText}
            readOnly
          ></textarea>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {ips.length > 0 && (
            <button style={{ position : 'fixed'}} className="btn btn-secondary" onClick={copyIPs}>Copy IP Addresses</button>
          )}


        </div>
      </div>
      <Footer />
    </>
  );
};

export default IpExtractor;
