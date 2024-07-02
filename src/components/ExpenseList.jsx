// src/components/ExpenseList.js
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ transactions, onDeleteTransaction }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <ExpenseItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} />
      ))}
    </ul>
  );
};

export default ExpenseList;
