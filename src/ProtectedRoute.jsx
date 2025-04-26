import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('ashaUser');
    if (!user) {
      navigate('/login');
    } else {
      setAllowed(true);
    }
  }, []);

  return allowed ? children : null;
}