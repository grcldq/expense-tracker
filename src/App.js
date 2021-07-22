import React, { useEffect, useState } from 'react';
import './App.css';

// react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

import defaultTransactions from './constants/transactions';

function App() {
  // state
  const [transactions, setTransactions] = useState(defaultTransactions);

  // functions
  const addTransaction = (e) => {
    e.preventDefault();

    const { amount, date, description, notes, category } = e.target;

    setTransactions((prevState) => {
      const id = prevState.length + 1;

      return [
        ...prevState,
        {
          id,
          amount: +amount.value,
          date: date.value,
          notes: notes.value,
          tag: category.value,
          label: description.value,
        },
      ];
    });

    // only works for uncontrolled components
    e.target.reset();
  };

  return (
    <div className='App'>
      <header>
        <h1 className='header-title'>Expense Tracker</h1>
        <p></p>
      </header>
      <hr />
      <main>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h2 className='main-title'>Add Transaction</h2>
              <ExpenseForm handleSubmit={addTransaction} />
            </Col>
            <Col xs={12} md={8}>
              <h2 className='main-title'>Previous Transactions</h2>
              <ExpenseTable transactions={transactions} />
            </Col>
          </Row>
        </Container>
        {/* <ExpenseVisuals /> */}
      </main>
    </div>
  );
}

export default App;
