import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import InvestmentCalculator from '../InvestmentCalculator'; // Ensure this file exists in the same folder

function Module1() {
  return (
    <Container>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Module 1: Introduction to Investing
        </Typography>

        <Typography variant="body1" paragraph>
          Investing is the act of committing your money or capital to an endeavor (a business, project, or asset)
          with the expectation of receiving an additional income or profit. Rather than simply saving money,
          investing puts your money to work so it can grow over time through appreciation, interest, dividends,
          or compound returns.
        </Typography>

        <Typography variant="h5" gutterBottom>
          What Is Investing?
        </Typography>
        <Typography variant="body1" paragraph>
          Investing means putting your money into something — like a business, project, or asset — with the goal that it will grow and make you more money over time. It’s different from just saving money in a piggy bank or a regular bank account because investing actually helps your money work for you.
        </Typography>
        <Typography variant="body1" paragraph>
          Think about Apple Inc., the company that makes iPhones, iPads, and MacBooks. When you buy Apple stock, you’re actually buying a small piece of Apple. You become a shareholder, which means you own a tiny part of the company. If Apple sells lots of iPhones and makes profits, your piece of Apple becomes more valuable, and the price of Apple’s stock usually goes up.
        </Typography>
        <Typography variant="body1" paragraph>
          So instead of just keeping your money in a safe place where it doesn’t grow much, investing it in Apple’s stock means your money can grow as the company grows — and sometimes you even get paid dividends, which are like small bonuses Apple shares with its owners.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Why Should You Invest?
        </Typography>
        <Typography variant="body1" paragraph>
          Here’s why investing, like buying stock in a company such as Apple, can be a smart move:
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li><strong>Grow Your Money Faster — Thanks to Compound Returns:</strong> When you invest, your money doesn’t just grow by itself. It earns money, and then that money earns even more money — like a snowball rolling down a hill getting bigger and bigger. This is called compound returns. For example, if you bought Apple stock years ago, your investment would have grown a lot because the company has done really well and kept innovating.</li>
          <li><strong>Beat Inflation — Keep Your Money’s Power:</strong> Inflation means prices of things like food, clothes, and gadgets slowly go up over time. If you just keep your money in a regular savings account, its buying power actually shrinks because interest rates are usually low, sometimes less than inflation. But if you invest in growing companies like Apple, your money can grow enough to stay ahead of inflation, so you can still buy the things you want in the future.</li>
          <li><strong>Reach Your Financial Goals Faster:</strong> Whether you want to buy a car, start your own business, or pay for college, investing can help you reach those goals sooner. For example, if you had invested a small amount in Apple when it first became public, your money could have grown enough over time to pay for college tuition or even buy a car, without needing to save every single dollar.</li>
        </Typography>

        <Typography variant="h5" gutterBottom>
          Real Example: Apple’s Growth Over Time
        </Typography>
        <Typography variant="body1" paragraph>
          Apple started in a garage and became one of the world’s biggest companies. Its stock price has grown thousands of times since its early days. People who invested in Apple years ago saw their money grow tremendously because Apple kept creating products people love and kept making profits.
        </Typography>
        <Typography variant="body1" paragraph>
          Investing in companies like Apple isn’t guaranteed to always make money — the stock price can go up and down. But with smart investing and patience, it’s a powerful way to grow your wealth over time.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Exercise:
        </Typography>
        <Typography variant="body1" component="ol" gutterBottom>
          <li>Research three different types of investments (e.g., stocks, bonds, real estate).</li>
          <li>Use the calculator below to estimate how much $1,000 would grow in 5, 10, or 20 years at 5%, 7%, and 10% returns.</li>
        </Typography>
      </Box>

      {/* Investment Growth Calculator */}
      <InvestmentCalculator />
    </Container>
  );
}

export default Module1;
