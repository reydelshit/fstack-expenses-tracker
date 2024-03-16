import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {
  const [accountDetails, setAccountDetails] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountDetails({
      ...accountDetails,
      [e.target.name]: e.target.value,
    });

    console.log(accountDetails);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:8800/users', accountDetails).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-green-50">
      <div className="bottom-2 flex h-[750px] w-[60%] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-green-400 bg-white p-4 text-center">
        <h1 className="text-[5rem] font-semibold text-green-500">Register</h1>

        <div className="grid w-full grid-cols-2 gap-10">
          <Input
            placeholder="First Name"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
            name="first_name"
            onChange={handleChange}
          />
          <Input
            placeholder="Last Name"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
            name="last_name"
            onChange={handleChange}
          />{' '}
          <Input
            placeholder="Username"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
            onChange={handleChange}
            name="username"
          />{' '}
          <Input
            placeholder="Password"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
            onChange={handleChange}
            name="password"
          />{' '}
          <Input
            placeholder="Retype Password"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
          />{' '}
        </div>

        <div className="flex w-full justify-end">
          <Button
            onClick={handleSubmit}
            className="w-[9rem] rounded-xl bg-green-400 p-8 text-[1.5rem] text-white"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
