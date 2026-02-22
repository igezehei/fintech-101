import React from 'react';
import { Link } from 'react-router-dom';


function Module6() {
  return (
    <div>
      <h2>Module 6: AI in Stock Markets</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Algorithmic Trading: Using AI to execute trades based on pre-defined criteria (including tariff announcements).</li>
          <li>Predictive Analytics: Leveraging AI to forecast stock price movements and geopolitical impacts.</li>
          <li>Robo-Advisors: AI-powered tools that provide automated investment advice, adjusted for macro risks.</li>
          <li>NLP (Natural Language Processing): AI analyzing trade policy announcements, earnings calls, and global news to predict market reactions.</li>
        </ul>
      </div>
      <div>
        <h3>2025-2026 Application: AI & Tariff Analysis</h3>
        <p>AI is increasingly critical in 2025-2026 due to tariff volatility. Here's how:</p>
        <ul>
          <li><strong>Tariff Monitoring:</strong> AI systems scan government announcements (USTR, Congress) in real-time and predict impacts on specific sectors.</li>
          <li><strong>Supply Chain Optimization:</strong> Companies use AI to reroute manufacturing from tariff-heavy countries (China) to tariff-free zones (Africa, Central America).</li>
          <li><strong>Sentiment Analysis:</strong> AI reads earnings calls and social media to gauge investor anxiety about tariff policies, predicting market volatility before it happens.</li>
          <li><strong>Hedging Strategies:</strong> Robo-advisors automatically adjust portfolios when tariff risks spike, reducing exposure to vulnerable sectors.</li>
        </ul>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>What is algorithmic trading, and how does AI enhance its efficiency?</li>
          <li>Explain how predictive analytics can help investors make better decisions.</li>
          <li>What are the advantages of using robo-advisors for portfolio management?</li>
        </ol>
      </div>

      <div>
        <h3>AI Activity</h3>
        <ul>
          <li>Task: Research a company that uses AI in stock trading (e.g., Renaissance Technologies).</li>
          <li>Deliverable: Write a short summary of how the company leverages AI to gain a competitive edge.</li>
          <li>Time: 50 minutes</li>
        </ul>
        <a href="https://www.ibm.com/watson-financial-services" target="_blank" rel="noopener noreferrer">
          Learn More About AI in Finance
        </a>
      </div>

      <Link to="/module-7">
        <button>Move to Module 7</button>
      </Link>
    </div>
  );
}

export default Module6;
