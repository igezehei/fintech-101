import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Module2() {
    const [progress, setProgress] = useState(0);

    const handleQuizCompletion = () => {
        setProgress(100);
        alert('Congratulations! You earned a badge for completing Module 2.');
    };

    return (
        <div>
            <h1>Becoming a Stock Market Pro (Even If You Just Learned What a “Share” Is)</h1>
            <p>Goal: Learn how stocks work, why prices change, and how to start trading smart.</p>

            <h2>🧩 Lesson 1: What Is a Stock?</h2>
            <p>Quick Take: A stock is a piece of a company. When you own one, you're basically a mini-owner of that business.</p>
            <p><strong>Example:</strong> Buying 1 share of Disney? Now you’re part-owner of Mickey Mouse’s empire.</p>
            <ul>
                <li><strong>Shareholder:</strong> You, the mini-boss.</li>
                <li><strong>Equity:</strong> Ownership in a company.</li>
                <li><strong>Dividend:</strong> Bonus money companies give you for being a shareholder.</li>
            </ul>

            <h2>📊 Lesson 2: Why Do Stock Prices Go Up and Down?</h2>
            <p>Quick Take: Stock prices change based on supply and demand — what people think the company is worth now and in the future.</p>
            <p><strong>Example:</strong> If Apple drops a new product everyone loves, more people want the stock → price goes up.</p>
            <ul>
                <li>News headlines 📺</li>
                <li>Earnings reports 📈</li>
                <li>Rumors & hype 🗣</li>
                <li>World events 🌍</li>
                <li>Human emotions 😬</li>
            </ul>

            <h2>💹 Lesson 3: What Is the Stock Market?</h2>
            <p>Quick Take: It’s a giant digital marketplace where stocks are bought and sold.</p>
            <ul>
                <li><strong>NYSE:</strong> Older companies like Coca-Cola</li>
                <li><strong>NASDAQ:</strong> Tech companies like Google, Roblox</li>
                <li><strong>TSX:</strong> Canada's stock market, eh 🍁</li>
            </ul>
            <p><strong>Bonus:</strong> You don’t need to be rich to invest. Many apps now let you buy fractional shares (just a piece of a stock).</p>

            <h2>💰 Lesson 4: How Do You Make Money With Stocks?</h2>
            <ul>
                <li><strong>Buy Low, Sell High:</strong> E.g., buy Netflix at $100 → sell at $150 = $50 gain</li>
                <li><strong>Dividends:</strong> Some companies share their profits with stockholders every few months</li>
            </ul>
            <p><strong>But Watch Out:</strong></p>
            <ul>
                <li>Stocks can lose value too</li>
                <li>Timing the market is tricky — steady investing often wins</li>
            </ul>

            <h2>⏳ Lesson 5: Why Start Investing Early?</h2>
            <p><strong>The Power of Compound Growth:</strong> It’s like a snowball that gets bigger the longer it rolls.</p>
            <p><strong>Example:</strong> Start with $100 at 16. At 10% annual growth, it could become $7,000+ by age 60 — even if you don’t add more.</p>

            <h2>🧠 Lesson 6: Learn to Trade the Market in 5 Steps</h2>
            <ul>
                <li><strong>Step 1:</strong> Open a Trading Account</li>
                <li><strong>Step 2:</strong> Learn to Read the Market</li>
                <li><strong>Step 3:</strong> Practice With Simulators</li>
                <li><strong>Step 4:</strong> Know the Rules (and Risks)</li>
                <li><strong>Step 5:</strong> Keep Learning</li>
            </ul>

            <h2>🎮 Lesson 7: Interactive Simulation — Choose Your Strategy</h2>
            <p>Pick your investor style:</p>
            <ul>
                <li>🧠 The Analyst: Only buys after deep research</li>
                <li>🧘 The Chill Investor: Buys a bit every month (dollar-cost averaging)</li>
                <li>🎯 The YOLO Trader: Loves memes and moves fast</li>
            </ul>

            <h2>✅ Lesson 8: Quiz & Recap</h2>
            <p>Quick Review:</p>
            <ul>
                <li>What is a stock?</li>
                <li>What makes prices change?</li>
                <li>How can you make (or lose) money?</li>
                <li>What are the 5 steps to trade smart?</li>
            </ul>
            <button onClick={handleQuizCompletion}>Complete Quiz</button>

            <div>
                <h2>Progress</h2>
                <div style={{ width: '100%', backgroundColor: '#ddd' }}>
                    <div style={{ width: `${progress}%`, backgroundColor: '#4caf50', height: '20px' }}></div>
                </div>
                <p>{progress}% completed</p>
            </div>

            <Link to="/module-1">
                <button>Back: Introduction to Investing</button>
            </Link>
            <Link to="/module-3">
                <button>Next: Stock Market Basics</button>
            </Link>

            <h2>What Are Stock Fundamentals?</h2>
            <p>
                Stock fundamentals are key metrics for a company, such as cash flow and return on assets (ROA). Analysts often perform fundamental analysis to analyze a stock by looking at its fundamentals. This involves looking at any data which is expected to impact the price or perceived value of a stock.
            </p>

            <h3>KEY TAKEAWAYS</h3>
            <ul>
                <li>Fundamental analysis involves looking at any data which is expected to impact the price or perceived value of a stock.</li>
                <li>Some of the fundamentals of stocks include cash flow, return on assets, and conservative gearing.</li>
                <li>Performing fundamental analysis can be challenging because it requires digging through financial statements to know when the stock price is wrong.</li>
            </ul>

            <h3>How Stock Fundamentals Work</h3>
            <p>
                In the broadest terms, fundamental analysis involves looking at any data which is expected to impact the price or perceived value of a stock. This is, of course, anything aside from the trading patterns of the stock itself. As the name implies, it means getting down to basics.
            </p>
            <p>
                Fundamental analysis focuses on creating a portrait of a company, identifying the fundamental value of its shares, and buying or selling the stock based on that information. Some of the indicators commonly used to assess company fundamentals include:
            </p>
            <ul>
                <li>Cash flow</li>
                <li>Return on assets</li>
                <li>Conservative gearing</li>
                <li>History of profit retention for funding future growth</li>
                <li>The soundness of capital management for the maximization of shareholder earnings and returns</li>
            </ul>

            <h3>Example of Stock Fundamentals</h3>
            <p>
                All of the data is public and readily available, generally through a company's financial statements. The goal is to ultimately identify which stocks are priced correctly—and incorrectly—by the market.
            </p>
            <p>
                To help you visualize it, let's use the following analogy. Think of the stock market as a shopping mall, where stocks are the items for sale in the retail outlets. Their sights are set solely on the products in the mall. Shoppers are dismissed as an unreliable, emotional herd with no inkling of the real value of the goods for sale.
            </p>
            <p>
                Fundamental analysts move slowly through the stores seeking the best deals. Once the crowd moves on from, say, the personal computers (PCs), they will take a closer look at the ones that were passed over.
            </p>
            <p>
                Fundamental analysts may take a stab at determining the scrap value of the PC stripped down to its hard disk, memory cards, monitor, and keyboard. In the stock market, this is akin to calculating the book value, or liquidation price, of a company.
            </p>
            <p>
                These analysts also take a very close look at the quality of the PC. Is it going to last or will it break down within a year? The fundamental analysts will pore over the specifications, scrutinize the manufacturer's warranty, and consult consumer reports. Similarly, equity analysts check a company's balance sheet for financial stability.
            </p>
            <p>
                Then, the fundamental analysts may try to understand the performance of the PC in terms of, say, processing power, memory, or image resolution. These are like the forecast earnings and dividends identified from a company's income statement.
            </p>
            <p>
                Finally, the fundamental analysts will put together all the data and come up with the intrinsic value, or value independent of the current sale price. If the sale price is less than the calculated intrinsic value, the fundamentalists will buy PCs. If not, they will either sell the PCs they already own or wait for prices to fall before buying more.
            </p>

            <h3>Special Considerations</h3>
            <p>
                Performing fundamental analysis can be a lot of hard work. But that is, arguably, the source of its appeal. By taking the trouble to dig into a company's financial statements and assessing its future prospects, investors can learn enough to know when the stock price is wrong.
            </p>
            <p>
                These conscientious investors are able to spot the market's mistakes and make themselves money. At the same time, buying companies based on intrinsic, long-term value protects investors from the dangers of day-to-day market fluctuations.
            </p>
            <p>
                However, the fact that fundamental analysis shows that a stock is undervalued does not guarantee it will trade at its intrinsic value any time soon. Things are not so simple. In reality, real share price behavior relentlessly calls into question almost every stock holding, and even the most independently-minded investor can start doubting the merits of fundamental analysis. There is no magic formula for figuring out intrinsic value.
            </p>

            <h3>IMPORTANT</h3>
            <p>
                Just because fundamental analysis shows that a stock is undervalued doesn't guarantee it will trade at its intrinsic value in the near future.
            </p>
            <p>
                When the stock market is booming, it is easy for investors to fool themselves into thinking they have a knack for picking winners. But when the market falls and the outlook is uncertain, investors cannot rely on luck. They actually need to know what they're doing.
            </p>

            <h3>Fundamental Analysis vs. Technical Analysis</h3>
            <p>
                Fundamental analysis is much different from its cousin, technical analysis. Where fundamental analysis focuses on measuring a stock's intrinsic value, technical analysis concentrates solely on the trading and price history of a stock by looking at trading signals and other analytical tools to evaluate the strength or weakness of a stock.
            </p>
            <p>
                Technical analysts believe that a stock's past performance—its price and trading activity—can help determine where it will go in the future. In essence, the theory of technical analysis is rooted in the fact that the movement in price is not random. Instead, it believes that patterns and trends are identifiable and repeat over time.
            </p>
            <p>
                To demonstrate, let's go back to the analogy above. Technical analysts ignore the goods for sale. Instead, they keep an eye on the crowds as a guide for what to buy. So, if a technical analyst notices shoppers congregating inside a computer shop, they will try to buy as many PCs as possible, betting that the growing demand will push PC prices higher.
            </p>
        </div>
    );
}

export default Module2;
