import React, { useState } from 'react';
import './style.scss';

interface Budget {
  value: number;
  name: string;
  income: Income[];
  totalIncome: number;
  incomeState: boolean;
  expensesState: boolean;
}

interface Income {
  name: string;
  amount: number;
}

const BudgetCalc = () => {
  const [budget, setBudget] = useState<Budget>({
    value: 0,
    name: '',
    income: [],
    totalIncome: 0,
    incomeState: false,
    expensesState: false,
  });

  const onClear = () => {
    setBudget((bug) => {
      return {
        ...bug,
        value: 0,
        name: '',
        totalIncome: 0,
        income: [],
      };
    });
  };

  return (
    <div>
      <div className='heading'>
        <h1>Budget Calculator</h1>
        <p>
          Built this project to keep tabs on what i spend on and help me fix it.
          you can aslo use this Budget calculator for your own use, just sign up
          to get going.
        </p>
        <button className='btn'>Sign Up</button>
      </div>

      {budget.incomeState ? (
        <div className='budget'>
          <div className='income'>
            <h1>Income</h1>
            <div className='income__amount'>
              <label>Income Name</label>
              <input
                type='text'
                placeholder='Enter Income name'
                value={budget.name}
                onChange={(e) => setBudget({ ...budget, name: e.target.value })}
              />
            </div>
            <div className='income__amount'>
              <label>Income Amount</label>
              <input
                type='number'
                placeholder='Enter Total Income'
                value={budget.value}
                onChange={(e) => {
                  setBudget({ ...budget, value: Number(e.target.value) });
                }}
              />
            </div>
            <div className='buttons'>
              <button
                className='btn'
                disabled={!budget.value && budget.name === ''}
                onClick={() => {
                  setBudget({
                    ...budget,
                    name: '',
                    value: 0,
                    totalIncome: budget.totalIncome + budget.value,
                    income: [
                      ...budget.income,
                      { name: budget.name, amount: budget.value },
                    ],
                  });
                }}
              >
                Add Income
              </button>
              <br />

              <button className='btn' onClick={onClear}>
                Clear
              </button>

              <button
                className='btn'
                onClick={() =>
                  setBudget({
                    ...budget,
                    expensesState: !budget.expensesState,
                    incomeState: !budget.incomeState,
                  })
                }
              >
                Add Expenses
              </button>
            </div>
            <div className='income-value'>
              {budget.income.map((i) => {
                return (
                  <div className='income-value__items'>
                    <h4> Income Amount Name: {i.name}</h4>
                    <p>Income Amount: £{i.amount}</p>
                  </div>
                );
              })}
            </div>

            <div className='total'>
              <h3>Income Total</h3>
              <p>£{budget.totalIncome}</p>
            </div>
          </div>
        </div>
      ) : budget.expensesState ? (
        <div className='income'>
          <h1>Expenses</h1>
        </div>
      ) : (
        <div className='start'>
          <h3>
            First Step is to put all your income salary income on a monthly
            basis and then input monthly expenditure to calculate your budget.
          </h3>
          <button
            className='btn'
            onClick={() => setBudget({ ...budget, incomeState: true })}
          >
            START
          </button>
        </div>
      )}
    </div>
  );
};

export default BudgetCalc;
