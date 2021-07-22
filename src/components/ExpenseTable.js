import React from 'react';

// constants
import tableHeaders from '../constants/tableHeaders';
import { categories } from '../constants/form';

// react-bootstrap
import Table from 'react-bootstrap/Table';

const rowColors = {
  1: '#e9f5db',
  2: '#BEE1E6',
  3: '#d6e2e9',
  4: '#FDE2E4',
  5: '#E2ECE9',
};

function ExpenseTable(props) {
  if (props.transactions.length === 0) {
    return (
      <p>No previous transactions recorded.</p>
    );
  }

  return (
    <Table bordered hover>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.transactions.map((transaction) => {
          const tag = categories.find((tag) => tag.id == transaction.tag);

          return (
            <tr
              key={transaction.id}
              style={{ backgroundColor: rowColors[transaction.tag] }}>
              <td style={{ maxWidth: '85px' }}>{transaction.date}</td>
              <td>{transaction.label}</td>
              <td>
                {transaction.amount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td>{tag ? tag.label : '-'}</td>
              <td style={{ minWidth: '110px' }}>{transaction.notes || '-'}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ExpenseTable;
