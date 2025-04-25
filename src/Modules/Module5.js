import React from 'react';
import { Link } from 'react-router-dom';

function Module5() {
  return (
    <div>
      <h2>Module 5: Managing Risk and Diversification</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Risk: The probability of loss on an investment.</li>
          <li>Diversification: Spreading investments across different assets to reduce risk.</li>
        </ul>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>Explain how diversification helps manage investment risk.</li>
          <li>What is the purpose of IBKR's BestX technology?</li>
        </ol>
      </div>

      <div>
        <h3>IBKR Activity</h3>
        <ul>
          <li>Task: Create a diversified portfolio using the IBKR platform.</li>
          <li>Time: 50 minutes</li>
        </ul>
        <a href="https://www.ibkr.com">Visit IBKR Trading Platform</a>
      </div>

      <Link to="/">
        <button>Finish Course</button>
      </Link>
    </div>
  );
}

export default Module5;
