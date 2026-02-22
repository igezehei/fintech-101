import React from 'react';
import { Link } from 'react-router-dom';

function Module4() {
  return (
    <div>
      <h2>Module 4: How the Stock Market Operates & Responds to Trade Policy</h2>
      <div>
        <h3>Key Concepts:</h3>
        <ul>
          <li>Primary Market: Where new securities are issued (e.g., IPO)—tariff-sensitive companies may struggle to raise capital.</li>
          <li>Secondary Market: Where previously issued securities are traded—most volatile during tariff announcements.</li>
          <li>Circuit Breakers: Automatic trading halts when markets drop 7%, 13%, or 20%—often triggered by major tariff policy shifts.</li>
          <li>Market Sentiment: 2025-2026 shows increased sensitivity to USTR (U.S. Trade Representative) announcements.</li>
        </ul>
      </div>

      <div>
        <h3>2025-2026 Market Dynamics</h3>
        <p><strong>Real Example:</strong> When President announced a 10% universal tariff on all imports in early 2025, the S&P 500 dropped 2.5% in a single day. Manufacturing stocks fell 5-8%, while domestic service stocks rose.</p>
        <p><strong>Why?</strong> Investors immediately recalculated earnings forecasts for companies with global supply chains, and the secondary market experienced massive sell-offs in tariff-vulnerable sectors.</p>
      </div>

      <div>
        <h3>Quiz Questions</h3>
        <ol>
          <li>What is the difference between the primary and secondary markets, and which is more affected by tariff policies?</li>
          <li>Explain how a major tariff announcement triggers trading circuit breakers.</li>
          <li>Why might an IPO struggle in a high-tariff environment?</li>
        </ol>
      </div>

      <div>
        <h3>Real-Time Trading Activity</h3>
        <ul>
          <li>Task: Monitor USTR announcements and track how specific tariff policies move stock prices in real-time using the IBKR platform.</li>
          <li>Focus: Healthcare vs. Manufacturing stocks—compare their tariff sensitivity.</li>
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
