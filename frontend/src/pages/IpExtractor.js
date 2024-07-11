import Header from '../Comp/header';
import Footer from '../Comp/footer';
import React, { useState } from 'react';
import './IpExtractor.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const IpExtractor = () => {
  const [inputText, setInputText] = useState('');
  const [ips, setIps] = useState([]);
  const [error, setError] = useState('');

  const extractIPs = (text) => {
    const ipRegex = /(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g;
    const matches = text.match(ipRegex);
    const uniqueIPs = matches ? Array.from(new Set(matches)) : [];
    return uniqueIPs;
  };

  const copyIPs = () => {
    const IPs = ips.join('\n');
    navigator.clipboard.writeText(IPs).then(() => {
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
    } else {
      setError('');
      setIps(extractedIPs);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>IP Address Extractor</h1>
        <label htmlFor="inputText">Enter text:</label><br />
        <textarea 
          style={{ margin: '20px' }}
          id="inputText"
          rows="5"
          cols="50"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <br />
        <button className="btn btn-primary" onClick={displayIPs}>Extract IP Addresses</button>
        <div id="result">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {ips.length > 0 && (
            <>
              <ul>
                {ips.map((ip, index) => (
                  <li key={index}>{ip}</li>
                ))}
              </ul>
              <button className="btn btn-secondary" onClick={copyIPs}>Copy IP Addresses</button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IpExtractor;
