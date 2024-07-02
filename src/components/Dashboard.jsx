// src/components/Dashboard.js
import React from 'react';

const Dashboard = ({ transactions }) => {
  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalInflows = transactions
    .filter((transaction) => transaction.type === 'inflow')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalInflows - totalExpenses;
  const balanceColor = balance >= 0 ? 'green' : 'red';

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p>Total Inflows: ${totalInflows.toFixed(2)}</p>
      <h3 style={{ color: balanceColor }}>
        Balance: ${balance.toFixed(2)}
      </h3>
    </div>
  );
};

export default Dashboard;
