import { Navigate } from 'react-router-dom';
import { useUser } from '../components/userContext';

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({
  children
}: Props) {

   const { userData } = useUser();

   if (!userData) {

      return <Navigate to="/" replace />;

   }

   return children;
}