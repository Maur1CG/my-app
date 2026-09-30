import { useState, useEffect, useCallback } from 'react';

export default function useApi(endpoint) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const load = useCallback(async () => {
    setIsLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error(`Error del servidor (${res.status})`);
      const json = await res.json();
      setItems(json.items ?? json.results ?? json);
    } catch (err) {
      setErrorMsg(err.message || 'No se pudo cargar la información');
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    load();
  }, [load]);

  return { items, isLoading, errorMsg, reload: load };
}
