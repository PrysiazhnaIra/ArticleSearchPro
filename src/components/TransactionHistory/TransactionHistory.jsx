import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({items}) => {
    return (
<table className={css.tableTransaction}>
  <thead>
    <tr className={css.topRow}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {
    items.map(transaction => {
        return (
        <tr className={css.transactionItem} key={transaction.id}>
            <td className={css.transactionType}>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>
            )
        })
    }
  </tbody>
</table>

    );
};

export default TransactionHistory;