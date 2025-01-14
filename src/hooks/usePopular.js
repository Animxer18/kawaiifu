import axios from 'axios';
import { useEffect, useState } from 'react';

export function usePopular() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState();

  async function getTrending() {
    const response = await axios.get(
      `https://animxer-api-cvxg.vercel.app/meta/anilist/popular`,
    );
    setPopular(response.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getTrending();
  }, []);

  return { popular, loading };
}
