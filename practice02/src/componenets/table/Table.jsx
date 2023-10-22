import { TableItem } from "./TableItem";
import styles from "./Table.module.css";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
  );
};

export const Table = ({ result, isNoData }) => {
  if (isNoData)
    return (
      <table className={styles.result}>
        <TableHead />
        <tbody>
          <tr>
            <td>There is no data.</td>
          </tr>
        </tbody>
      </table>
    );

  return (
    <table className={styles.result}>
      <TableHead />
      <tbody>
        {result.map((i) => (
          <TableItem
            year={i.year}
            totalSavings={i.savingsEndOfYear}
            interest={i.yearlyInterest / 12}
            totalInterest={i.yearlyInterest}
            investedCapital={i.yearlyContribution}
          />
        ))}
      </tbody>
    </table>
  );
};
