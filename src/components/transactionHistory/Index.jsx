import style from './TransactionHistory.module.css'
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
    <table className={style.transactionhistory}>
      <thead className={style.thead}>
        <tr className={style.trcontent}>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.tbody}>
        
          {items.map(transaction => (
            <tr className={style.tr} key={transaction.id}>
              <td className={style.descriptiontd}>{transaction.type}</td>
              <td className={style.descriptiontd}>{transaction.amount}</td>
              <td className={style.descriptiontd}>{transaction.currency}</td>
            </tr>
          ))}
        
      </tbody>
    </table>
  );
};
//   key={transaction.type}
// key={transaction.id}