import { useAuth } from '@/hooks/store';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAuth.getState().isAuthenticated;
  const userDetails = useAuth.getState().userDetails;
  const authTokenExpenses = localStorage.getItem('authTokenExpenses');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && userDetails === null && !authTokenExpenses) {
      navigate('/sign-in', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate, userDetails]);

  return children;
}
