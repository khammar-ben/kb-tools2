import Header from '../Comp/header';
import Footer from '../Comp/footer';
import React, { useState } from 'react';
import './check_spf_dmarc.css';

function App() {
    const [domains, setDomains] = useState('');
    const [results, setResults] = useState([]);

    const checkRecords = async () => {
        const domainList = domains.split(/[\s,]+/).filter(domain => domain.trim() !== '');
        const response = await fetch('/api/check_records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ domains: domainList }),
        });
        const data = await response.json();
        setResults(data);
    };

    const copyToClipboard = (domain) => {
        navigator.clipboard.writeText(domain)
            .then(() => {
                alert(`Domain ${domain} copied to clipboard`);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <>
        <Header /> 
        <div className="App">
            <h1>Check SPF and DMARC Records</h1>
            <textarea
                value={domains}
                onChange={(e) => setDomains(e.target.value)}
                placeholder="Enter domains separated by commas"
            />
            <button onClick={checkRecords}>Check Records</button>
            {results.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Domain</th>
                            <th>SPF Record</th>
                            <th>DMARC Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr key={index} onClick={() => copyToClipboard(result.domain)}>
                                <td>{result.domain}</td>
                                <td>{result.spf_record}</td>
                                <td>{result.dmarc_record}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        <Footer />
        </>
    );
}

export default App;
