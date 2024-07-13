import Header from '../Comp/header';
import Footer from '../Comp/footer';
import React from 'react';
import './home.css'; // Assuming you create a separate CSS file for styles

const Home = () => {
  return (
    <>
     
    <Header />
    <div className="links">

      <div className="link">
        <a href="/ExtractDomains">Extract Domains</a> <br/><br/>
        <a href="/IpExtractor">Extract Ips</a> <br/><br/>
        <a href="/Shufl_U_L">Shuffles Upper_Lower case</a>  <br/><br/>
      </div>

      <div className="link">
        <a href="/Shufl_Lines">Shuffles Lines</a> <br/><br/>
        <a href="/TextToHtml">Text To HTML</a><br/><br/>
        <a href="/Check_spf_dmarc">Check SPF & DMARC of Domains</a><br/><br/>
      </div>
   
    </div>
    <Footer />
    </>
  );
};

export default Home;
