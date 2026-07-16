import { useState, useEffect } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export function useChapter(id) {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_BASE}/api/chapters/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Chapter ${id} not found (${res.status})`);
        return res.json();
      })
      .then(setChapter)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { chapter, loading, error };
}
