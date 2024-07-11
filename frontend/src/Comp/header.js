import React from "react";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/IpExtractor">
              Ip Extractor
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/ExtractDomains">
              Domaine Extractor 
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Shufl_U_L">
              Shuffles U_L
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Check_spf_dmarc">
              Check SPF & DMARC
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Shufl_Lines">
              Shuffles Lines
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/TextToHtml">
              Text To HTML
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
