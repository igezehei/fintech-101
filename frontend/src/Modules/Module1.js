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
          Why Should You Invest?
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li><strong>Grow wealth over time:</strong> Compounding returns can significantly increase your money over the long run.</li>
          <li><strong>Beat inflation:</strong> Investing helps preserve and increase your purchasing power.</li>
          <li><strong>Achieve financial goals:</strong> It helps bridge the gap between where you are and where you want to be financially.</li>
        </Typography>

        <Typography variant="h5" gutterBottom>
          Real-World Example: The Power of Compounding
        </Typography>
        <Typography variant="body1" paragraph>
          Let’s compare two scenarios:
        </Typography>

        <Typography variant="body2" paragraph>
          <strong>🏦 Scenario 1: Saving in a Bank Account</strong><br />
          You deposit $1,000 in a savings account offering 1% annual interest. After 10 years:<br />
          <em>$1,000 × (1 + 0.01)¹⁰ = $1,105</em>
        </Typography>

        <Typography variant="body2" paragraph>
          <strong>📈 Scenario 2: Investing in an Index Fund</strong><br />
          You invest $1,000 in a stock market index fund with a historical 7% return. After 10 years:<br />
          <em>$1,000 × (1 + 0.07)¹⁰ ≈ $1,967</em>
        </Typography>

        <Typography variant="body1" paragraph>
          That’s nearly double the return — just by choosing to invest. This demonstrates how time and compound growth
          can build significant wealth over decades.
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
