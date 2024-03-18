import axios from 'axios';
import { useAuth } from './store';
import { User } from '@/entities/types';

interface Credentials {
  username: string;
  password: string;
}

type AuthResponse = {
  token: string;
  data: User;
};

export default async function useAuthenticate({
  username,
  password,
}: Credentials) {
  return new Promise<AuthResponse>((resolve, reject) => {
    axios
      .post('http://localhost:8800/users', {
        username,
        password,
      })
      .then((response) => {
        if (response.data) {
          const users: AuthResponse = response.data as AuthResponse;
          const authToken = users.token;
          useAuth.setState({ isAuthenticated: true });
          useAuth.setState({ userDetails: users.data });

          resolve(users);
        } else {
          console.error('No users found or error occurred.');

          resolve({ token: '', data: {} as User });
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

// try {
//   const response = await axios.post('http://localhost:8800/users', {
//     username,
//     password,
//   });

//   if (response.data) {
//     const users: AuthResponse = response.data as AuthResponse;
//     const authToken = users.data.user_id;
//     // // localStorage.setItem('authTokenExpenses', JSON.stringify(authToken));
//     // useAuth.setState({ isAuthenticated: true });
//     // useAuth.setState({ userDetails: users.data });

//     return users;
//   } else {
//     console.error('No users found or error occurred.');

//     return [];
//   }
// } catch (err) {
//   console.log(err);
// }

// return [];
