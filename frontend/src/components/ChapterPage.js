import React from 'react';
import { Container, Box, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useChapter } from '../hooks/useChapter';

const LINK = { textDecoration: 'none', color: '#1976d2', fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Roboto, Arial, sans-serif' };
const TOTAL_CHAPTERS = 7;

export default function ChapterPage({ chapterId, children }) {
  const { chapter, loading, error } = useChapter(chapterId);

  if (loading) {
    return (
      <Container sx={{ pt: 6, textAlign: 'center' }}>
        <CircularProgress size={28} />
        <Typography variant="body2" sx={{ mt: 2, color: '#888' }}>Loading chapter…</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ pt: 6 }}>
        <Typography variant="body1" sx={{ color: '#c0392b' }}>
          Could not load chapter. Make sure the backend is running on{' '}
          {process.env.REACT_APP_API_URL || 'http://localhost:8080'}.
        </Typography>
      </Container>
    );
  }

  const prevId = chapterId > 1 ? chapterId - 1 : null;
  const nextId = chapterId < TOTAL_CHAPTERS ? chapterId + 1 : null;

  return (
    <Container>
      {/* Title from backend metadata */}
      <h1>{chapter.title}</h1>

      {/* Body HTML from backend — content is server-controlled, not user input */}
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: chapter.htmlContent }} />

      {/* Module-specific interactive elements (calculator, quiz, etc.) */}
      {children}

      {/* Chapter navigation */}
      <Box
        sx={{
          mt: 5,
          pt: 2.5,
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {prevId ? (
          <Link to={`/module-${prevId}`} style={LINK}>← Chapter {prevId}</Link>
        ) : (
          <span />
        )}
        {nextId ? (
          <Link to={`/module-${nextId}`} style={LINK}>Chapter {nextId} →</Link>
        ) : (
          <Link to="/" style={LINK}>← Return Home</Link>
        )}
      </Box>
    </Container>
  );
}
