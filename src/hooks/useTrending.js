import axios from 'axios';
import { useEffect, useState } from 'react';

export function useTrending() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState();

  async function getTrending() {
    const response = await axios.get(
      `https://animxer-api-cvxg.vercel.app/meta/anilist/trending`,
    );
    setTrending(response.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getTrending();
  }, []);

  return { trending, loading };
}
