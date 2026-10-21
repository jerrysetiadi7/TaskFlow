import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [status, setStatus] = useState('loading...');

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('error'));
  }, []);

  return <h1>TaskFlow API: {status}</h1>;
}