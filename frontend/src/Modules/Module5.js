import React from 'react';
import { Link } from 'react-router-dom';

function Module5() {
  return (
    <div>
      <h2>Module 5: Managing Risk, Diversification & Tariff Volatility</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Risk: The probability of loss on an investment—including tariff risk and geopolitical risk.</li>
          <li>Diversification: Spreading investments across different assets to reduce risk.</li>
          <li>Sector Diversification: Balancing tariff-sensitive sectors (Manufacturing, Tech) with tariff-immune sectors (Healthcare, Telecom).</li>
          <li>Geographic Diversification: Investing in countries with favorable trade relationships reduces exposure to U.S.-centric tariff swings.</li>
          <li>Volatility Index (VIX): Nicknamed the "fear gauge," it spikes during tariff announcements.</li>
        </ul>
      </div>

      <div>
        <h3>2025-2026 Risk Management Strategy</h3>
        <p><strong>The Problem:</strong> A portfolio heavy in U.S. tech stocks (Apple, NVIDIA, Intel) faces 25%+ drawdowns if tariffs spike.</p>
        <p><strong>The Solution:</strong> Diversify across:</p>
        <ul>
          <li><strong>Defensive Sectors:</strong> Healthcare (UnitedHealth), Utilities (Duke Energy)—tariff-proof.</li>
          <li><strong>Domestic Beneficiaries:</strong> Companies avoiding tariffs like U.S. steel producers or domestic manufacturers.</li>
          <li><strong>International Diversification:</strong> European or Asian tech stocks to hedge against U.S. policy risk.</li>
          <li><strong>Bonds & Gold:</strong> Safe havens during trade war uncertainty.</li>
        </ul>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>Explain how diversification helps manage tariff-related investment risk during 2025-2026.</li>
          <li>If the U.S. announces 50% tariffs on Chinese goods, which sectors would you add to your portfolio as hedges?</li>
          <li>What is the purpose of BestX technology in minimizing trading losses during volatile tariff announcements?</li>
        </ol>
      </div>

      <div>
        <h3>Portfolio Construction Activity</h3>
        <ul>
          <li>Task: Create a diversified portfolio using the IBKR platform that balances tariff exposure.</li>
          <li>Requirements: Include defensive sectors, domestic beneficiaries, international stocks, and bonds.</li>
          <li>Challenge: Model how your portfolio performs under three scenarios: (1) No new tariffs, (2) 25% tariffs on China, (3) 10% universal tariffs.</li>
          <li>Time: 50 minutes</li>
        </ul>
        <a href="https://www.ibkr.com">Visit IBKR Trading Platform</a>
      </div>

      <Link to="/module-6">
              <button>Move to Module 6</button>
            </Link>
    </div>
  );
}

export default Module5;
