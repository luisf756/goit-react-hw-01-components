// export const TransactionHistory = ({ items }) => {

//      return items.map(transaction => (
//         <table class="transaction-history">
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Amount</th>
//             <th>Currency</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr >
//             <td> {transaction.type}</td>
//             <td>{transaction.amount}</td>
//             <td>{transaction.currency}</td>
//           </tr>

//         </tbody>
//       </table>
//     ));
//   };
// //   key={transaction.type}
export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        
          {items.map(transaction => (
            <tr>
              <td> {transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        
      </tbody>
    </table>
  );
};
//   key={transaction.type}
