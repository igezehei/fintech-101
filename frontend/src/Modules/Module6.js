import React from 'react';
import { Link } from 'react-router-dom';


function Module6() {
  return (
    <div>
      <h2>Module 6: AI in Stock Markets</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Algorithmic Trading: Using AI to execute trades based on pre-defined criteria.</li>
          <li>Predictive Analytics: Leveraging AI to forecast stock price movements.</li>
          <li>Robo-Advisors: AI-powered tools that provide automated investment advice.</li>
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
