import React from 'react';
import { Link } from 'react-router-dom';

function Module3() {
  return (
    <div>
      <h2>Module 3: Understanding Different Financial Instruments</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Equity Share: Represents ownership in a company.</li>
          <li>Debt Instrument (Bond): Represents a loan made by an investor to a borrower.</li>
        </ul>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>What is the difference between owning a stock and owning a bond?</li>
          <li>What is the primary advantage of investing in a mutual fund?</li>
        </ol>
      </div>

      <div>
        <h3>IBKR Activity</h3>
        <ul>
          <li>Task: Research stock profiles for Google and Tesla.</li>
          <li>Time: 30 minutes</li>
        </ul>
        <a href="https://www.ibkr.com">Visit IBKR Trading Platform</a>
      </div>

      <Link to="/module-4">
        <button>Next Module: Module 4</button>
      </Link>
    </div>
  );
}

export default Module3;
