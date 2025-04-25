import React from 'react';
import { Link } from 'react-router-dom';

function Module2() {
  return (
    <div>
      <h2>Module 2: Getting Started with IBKR</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Broker: A financial intermediary that facilitates trades between buyers and sellers.</li>
          <li>Commissions: Fees charged by a broker for executing trades.</li>
        </ul>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>What are the benefits of choosing IBKR as a broker?</li>
          <li>Outline the steps to open an IBKR account.</li>
        </ol>
      </div>

      <div>
        <h3>IBKR Activity</h3>
        <ul>
          <li>Task: Create an IBKR account and explore different account types.</li>
          <li>Time: 45 minutes</li>
        </ul>
        <a href="https://www.interactivebrokers.com/en/index.php?f=17055">Go to IBKR Sign Up</a>
      </div>

      <Link to="/module-3">
        <button>Next Module: Module 3</button>
      </Link>
    </div>
  );
}

export default Module2;
