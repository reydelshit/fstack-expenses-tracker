import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const AddExpenses = ({
  setShowAddExpense,
}: {
  setShowAddExpense: (e: boolean) => void;
}) => {
  return (
    <div className="absolute top-0 flex h-dvh w-full items-center justify-center border-2 border-green-500 bg-green-100 bg-opacity-50">
      <div className="relative flex h-[60%] w-[40%] flex-col items-center justify-center rounded-xl border-2 bg-white p-4">
        <Button
          className="absolute right-2 top-2 bg-green-500"
          onClick={() => setShowAddExpense(false)}
        >
          X
        </Button>{' '}
        <p className="text-2xl font-semibold text-green-500">
          Today, March 8, 2024
        </p>
        <Input
          className="my-[2rem] h-[8rem] w-[50%] text-center text-[5rem] font-bold text-red-500 placeholder:text-center placeholder:text-[5rem]"
          placeholder="₱0"
          type="number"
        />
        <Select>
          <SelectTrigger className="w-[50%]">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Flower">Flower 💐 </SelectItem>
            <SelectItem value="Electricity">Electricity⚡</SelectItem>
            <SelectItem value="Food">Food🥦</SelectItem>
          </SelectContent>
        </Select>
        <Button className="mt-[4rem] h-[4rem] w-[50%] bg-green-500 text-[1.5rem]">
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default AddExpenses;
