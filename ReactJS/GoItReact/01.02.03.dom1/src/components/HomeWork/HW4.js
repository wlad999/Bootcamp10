import React from 'react';

const TransactionHistory = ({ ite }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {ite.map(el => (
      <>
        <tbody>
          <tr>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        </tbody>
      </>
    ))}
  </table>
);

export default TransactionHistory;
