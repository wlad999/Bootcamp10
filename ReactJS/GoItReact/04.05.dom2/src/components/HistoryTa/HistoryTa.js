import React from 'react';

const HistoryTa = ({ history }) => (
  <table className="history">
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {history.map(el => (
        <tr>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default HistoryTa;
