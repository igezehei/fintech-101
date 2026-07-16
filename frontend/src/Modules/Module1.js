import React from 'react';
import ChapterPage from '../components/ChapterPage';
import InvestmentCalculator from '../InvestmentCalculator';

export default function Module1() {
  return (
    <ChapterPage chapterId={1}>
      <InvestmentCalculator />
    </ChapterPage>
  );
}
