import React from 'react';
import { Link } from 'react-router-dom';

function Module1() {
  return (
    <div>
      <h2>Module 1: Introduction to Investing and the Stock Market</h2>
      <div>
        <h3>Slide 1: What is Investing?</h3>
        <p>Definition: Allocation of capital with the expectation of generating future income or profit.</p>
      </div>

      <div>
        <h3>Slide 2: What is the Stock Market?</h3>
        <p>The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies, funds, and other financial products.</p>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>What is the primary purpose of the stock market?</li>
          <li>Describe two forms capital can take.</li>
          <li>Name one reason why individuals invest in the stock market.</li>
        </ol>
      </div>

      <div>
        <h3>IBKR Activity</h3>
        <ul>
          <li>Task: Open a demo account on IBKR.</li>
          <li>Objective: Get familiar with the trading interface.</li>
          <li>Time: 30 minutes</li>
        </ul>
        <a href="https://www.interactivebrokers.com/en/index.php?f=17055">Go to IBKR Demo Account</a>
      </div>

      <Link to="/module-2">
        <button>Next Module: Module 2</button>
      </Link>
    </div>
  );
}

export default Module1;
