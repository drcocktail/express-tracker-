import React from 'react';

const ExpenseItem = ({ transaction, onDeleteTransaction }) => {
  return (
    <li>
      {transaction.title}: ${transaction.amount} ({transaction.type})
      <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
    </li>
  );
};

export default ExpenseItem;