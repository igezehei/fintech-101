import React from 'react';
import { Link } from 'react-router-dom';


function Module7() {
  return (
    <div>
      <h2>Module 7: The Future of Investing</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Blockchain Technology: Revolutionizing transparency and security in investments.</li>
          <li>Decentralized Finance (DeFi): Removing intermediaries in financial transactions.</li>
          <li>ESG Investing: Focusing on environmental, social, and governance factors.</li>
          <li>Fractional Shares: Allowing investors to buy portions of expensive stocks.</li>
        </ul>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>How does blockchain technology improve transparency in investing?</li>
          <li>What is Decentralized Finance (DeFi), and how does it differ from traditional finance?</li>
          <li>Explain the importance of ESG factors in modern investment strategies.</li>
          <li>What are fractional shares, and how do they benefit small investors?</li>
        </ol>
      </div>

      <div>
        <h3>Future-Oriented Activity</h3>
        <ul>
          <li>Task: Research a recent innovation in investing (e.g., tokenized assets or AI-driven ESG scoring).</li>
          <li>Deliverable: Write a short report on how this innovation could shape the future of investing.</li>
          <li>Time: 60 minutes</li>
        </ul>
        <a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank" rel="noopener noreferrer">
          Learn More About Blockchain in Investing
        </a>
      </div>

      <Link to="/">
        <button>Finish Module</button>
      </Link>
    </div>
  );
}

export default Module7;
