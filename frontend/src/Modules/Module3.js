import React from 'react';
import { Link } from 'react-router-dom';

function Module3() {
  return (
    <div>
      <h2>Module 3: Understanding Different Financial Instruments & Tariff Exposure</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Equity Share: Represents ownership in a company (vulnerable to tariff shocks).</li>
          <li>Debt Instrument (Bond): Represents a loan made by an investor to a borrower (safer but affected by inflation from trade wars).</li>
          <li>Commodity Stocks: Companies in agriculture, metals, energy—directly exposed to tariff policies.</li>
          <li>Currency Hedging: Using financial instruments to protect against currency swings caused by trade tensions.</li>
        </ul>
      </div>

      <div>
        <h3>2025-2026 Context: How Tariffs Affect Different Instruments</h3>
        <p><strong>Equity Shares:</strong> A manufacturer importing steel from Canada faces higher costs due to U.S. tariffs. Its stock price falls. But a domestic competitor who sources steel locally might benefit.</p>
        <p><strong>Bonds:</strong> If tariffs trigger inflation, bond prices fall because older bonds paying 3% interest become less attractive. New bonds might pay 5%, making old ones obsolete.</p>
        <p><strong>Real World Example:</strong> In Q1 2025, when the Trump administration proposed 25% tariffs on Mexican goods, investors shifted from Mexican peso bonds to dollar bonds, causing currency volatility.</p>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>What is the difference between owning a stock and owning a bond in tariff-heavy economies?</li>
          <li>How might a 25% tariff on Chinese imports affect a U.S. chipmaker's bond rating?</li>
          <li>What is the primary advantage of investing in a mutual fund during trade wars?</li>
        </ol>
      </div>

      <div>
        <h3>Research Activity: Tariff-Impacted Companies</h3>
        <ul>
          <li>Task: Research stock profiles and tariff exposure for companies like Tesla (imports from Mexico/China), Walmart (imports clothing), and ArcelorMittal (steel, eligible for tariff exemptions).</li>
          <li>Analysis: Compare how tariff announcements on different dates affected their stock prices (use data from 2025).</li>
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
