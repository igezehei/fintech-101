import React, { useState } from 'react';
import { Box } from '@mui/material';
import ChapterPage from '../components/ChapterPage';

export default function Module2() {
  const [progress, setProgress] = useState(0);

  const handleQuizCompletion = () => {
    setProgress(100);
    alert('Congratulations! You earned a badge for completing the Chapter 2 quiz.');
  };

  return (
    <ChapterPage chapterId={2}>
      <Box sx={{ mt: 2 }}>
        <button onClick={handleQuizCompletion} style={{ fontFamily: 'Roboto, Arial, sans-serif', padding: '8px 20px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: '0.875rem' }}>
          Complete Quiz
        </button>
        <Box sx={{ mt: 1.5, width: '100%', backgroundColor: '#e0e0e0', borderRadius: 1, overflow: 'hidden' }}>
          <Box sx={{ width: `${progress}%`, backgroundColor: '#4caf50', height: 12, transition: 'width 0.4s ease' }} />
        </Box>
        <Box component="p" sx={{ fontSize: '0.78rem', color: '#888', mt: 0.5 }}>{progress}% completed</Box>
      </Box>
    </ChapterPage>
  );
}
