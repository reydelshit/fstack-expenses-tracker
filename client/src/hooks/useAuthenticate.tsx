import axios from 'axios';
import { useAuth } from './store';
import { User } from '@/entities/types';

interface Credentials {
  username: string;
  password: string;
}

export default async function useAuthenticate({
  username,
  password,
}: Credentials) {
  try {
    const response = await axios.get('http://localhost:8800/users', {
      params: {
        username,
        password,
      },
    });

    if (response.data && response.data.length > 0) {
      const users: User[] = response.data as User[];
      const authToken = users[0].user_id;
      localStorage.setItem('authTokenExpenses', JSON.stringify(authToken));
      useAuth.setState({ isAuthenticated: true });
      useAuth.setState({ userDetails: users[0] });
      return users;
    } else {
      console.error('No users found or error occurred.');

      return [];
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
