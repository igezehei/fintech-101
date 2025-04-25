import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Module1() {
  return (
    <Container>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Module 1: Introduction to Investing
        </Typography>
        <Typography variant="body1" gutterBottom>
          Investing is the act of allocating resources (usually money) with the expectation of generating income or profit. It is a key component of building wealth and achieving financial independence.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Why Invest?
        </Typography>
        <Typography variant="body1" gutterBottom>
          - To grow wealth over time.<br />
          - To beat inflation and secure financial independence.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Real-World Example:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Imagine you have $1,000 in savings. Instead of keeping it in a savings account with a 1% annual interest rate, you decide to invest in an index fund that historically returns 7% annually. Over 10 years, your $1,000 grows to approximately $1,967, compared to $1,105 in a savings account.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Exercise:
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. Research three different types of investments (e.g., stocks, bonds, real estate).<br />
          2. Calculate how much $1,000 would grow in 5 years at an annual return of 5%, 7%, and 10%.
        </Typography>
      </Box>
    </Container>
  );
}

export default Module1;
