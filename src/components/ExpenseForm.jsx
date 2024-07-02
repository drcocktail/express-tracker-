// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAddTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ title, amount: parseFloat(amount), type, id: Date.now() });
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="inflow">Inflow</option>
        </select>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
