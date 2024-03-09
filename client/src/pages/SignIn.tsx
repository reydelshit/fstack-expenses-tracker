import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-green-50">
      <div className="bottom-2 flex h-[750px] w-[60%] gap-2 rounded-2xl border-2 border-green-400 bg-white p-4">
        <div className="relative flex w-[50%] items-center justify-center">
          <h1 className="text-[6rem] font-bold text-green-500">
            TRACK YOUR EXPENSES WITH EASE!
          </h1>
          <span className="absolute right-0 top-0 rotate-12 text-[15rem]">
            ⚡
          </span>
        </div>
        <div className="flex w-[50%] items-center justify-center">
          <form className="flex w-full flex-col">
            <h1 className="text-[5rem] font-semibold text-green-500">Login</h1>
            <Input
              placeholder="Email"
              className="mb-2 rounded-xl border-2 border-green-500 p-10"
            />
            <Input
              placeholder="Password"
              className="mb-2 rounded-xl border-2 border-green-500 p-10"
            />

            <Link to="/signup" className="text-green-500">
              CREATE ACCOUNT
            </Link>
            <div className="flex w-full justify-end">
              <Button className="w-[9rem] rounded-xl bg-green-400 p-8 text-[1.5rem] text-white">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
