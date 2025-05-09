import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function InvestmentCalculator() {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(7);
  const [result, setResult] = useState(null);

  const calculateGrowth = () => {
    const r = rate / 100;
    const finalAmount = initialAmount * Math.pow(1 + r, years);
    setResult(finalAmount.toFixed(2));
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Investment Growth Calculator
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
        <TextField
          label="Initial Amount ($)"
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(parseFloat(e.target.value))}
        />
        <TextField
          label="Years"
          type="number"
          value={years}
          onChange={(e) => setYears(parseInt(e.target.value))}
        />
        <TextField
          label="Annual Return (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
      </Box>
      <Button variant="contained" onClick={calculateGrowth}>
        Calculate
      </Button>
      {result && (
        <Typography sx={{ mt: 2 }}>
          Final Amount: <strong>${result}</strong>
        </Typography>
      )}
    </Box>
  );
}

export default InvestmentCalculator;
