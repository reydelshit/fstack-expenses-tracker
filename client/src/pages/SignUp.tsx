import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SignUp = () => {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-green-50">
      <div className="bottom-2 flex h-[750px] w-[60%] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-green-400 bg-white p-4 text-center">
        <h1 className="text-[5rem] font-semibold text-green-500">Register</h1>

        <div className="grid w-full grid-cols-2 gap-10">
          <Input
            placeholder="First Name"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
          />
          <Input
            placeholder="Last Name"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
          />{' '}
          <Input
            placeholder="Birthday"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
          />{' '}
          <Input
            placeholder="Email"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
          />{' '}
          <Input
            placeholder="Password"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
          />{' '}
          <Input
            placeholder="Retype Password"
            className="mb-2 rounded-xl border-2 border-green-500 p-10"
          />{' '}
        </div>

        <div className="flex w-full justify-end">
          <Button className="w-[9rem] rounded-xl bg-green-400 p-8 text-[1.5rem] text-white">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
