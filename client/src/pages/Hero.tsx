import { Button } from '@/components/ui/button';

const Hero = () => {
  const Expenses = [
    {
      date: 'January 31, 2024',
      icon: '🍔',
      category: 'Food',
      amount: 100,
    },

    {
      date: 'January 31, 2024',
      icon: '🍔',
      category: 'Food',
      amount: 100,
    },
    {
      date: 'January 31, 2024',
      icon: '🍔',
      category: 'Food',
      amount: 100,
    },
    {
      date: 'January 31, 2024',
      icon: '🍔',
      category: 'Food',
      amount: 100,
    },
  ];
  return (
    <div className="container bottom-2 flex min-h-[750px] w-[60%] flex-col items-center gap-2 rounded-2xl border-2 border-green-400 bg-white p-4">
      <div className="flex h-[10rem]  w-[80%] items-center justify-between p-4">
        <h1 className="text-[3rem] font-semibold text-green-500">
          Welcome, Reydel 👋
        </h1>
        <div className="relative h-[100%] w-[19rem] rounded-3xl border-2 border-green-500 p-2 text-end">
          <div className=" mr-[2rem] flex h-full flex-col justify-center">
            <h1 className="text-5xl font-bold text-red-500">-879</h1>
            <p className="text-lg text-green-500">
              Previous Month{' '}
              <span className="font-semibold text-red-500">-999</span>
            </p>
          </div>
          <span className="absolute bottom-8 right-2 block text-sm text-green-500">
            php
          </span>
        </div>
      </div>

      <div className="h-[80%] w-[80%] overflow-x-auto pr-4">
        {Expenses.map((expense, index) => {
          return (
            <div className="mb-5 h-[6rem] w-full" key={index}>
              <span className="my-1 block text-green-500">{expense.date}</span>
              <div className="flex items-center justify-between rounded-2xl border-2 border-green-500 p-4 text-green-500">
                <div className="flex items-center gap-2 text-[2rem] font-semibold">
                  <span>{expense.icon}</span>
                  <h1>{expense.category}</h1>
                </div>
                <h2 className="text-[2rem] font-bold text-red-500">
                  -{expense.amount}{' '}
                  <span className="inline-block text-base font-semibold text-green-500">
                    php
                  </span>
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-4 flex h-[8rem] w-[80%] items-center justify-around gap-4 p-2">
        <Button className="h-[3rem] w-[15rem] border-2 border-green-500 bg-transparent text-green-500">
          Analytics
        </Button>
        <Button className="h-[6rem] w-[6rem] rounded-full border-2 border-green-500 bg-transparent text-[2.5rem] font-bold text-green-500">
          +
        </Button>
        <Button className="h-[3rem] w-[15rem] border-2 border-green-500 bg-transparent text-green-500">
          Analytics
        </Button>
      </div>
    </div>
  );
};

export default Hero;
