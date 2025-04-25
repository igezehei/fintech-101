import React from 'react';
import { Link } from 'react-router-dom';

function Module4() {
  return (
    <div>
      <h2>Module 4: How the Stock Market Operates</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Primary Market: Where new securities are issued (e.g., IPO).</li>
          <li>Secondary Market: Where previously issued securities are traded.</li>
        </ul>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>What is the difference between the primary and secondary markets?</li>
          <li>What is the purpose of online trading software?</li>
        </ol>
      </div>

      <div>
        <h3>IBKR Activity</h3>
        <ul>
          <li>Task: Participate in an IPO using the IBKR platform.</li>
          <li>Time: 40 minutes</li>
        </ul>
        <a href="https://www.ibkr.com">Visit IBKR Trading Platform</a>
      </div>

      <Link to="/module-5">
        <button>Next Module: Module 5</button>
      </Link>
    </div>
  );
}

export default Module4;
