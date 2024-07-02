// src/App.js
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="app-container">
      <div className="top-bar">Expense Tracker</div>
      <div className="container">
        <h1>Expense Tracker</h1>
        <Dashboard transactions={transactions} />
        <ExpenseForm onAddTransaction={handleAddTransaction} />
        <ExpenseList transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
      </div>
    </div>
  );
};

export default App;
