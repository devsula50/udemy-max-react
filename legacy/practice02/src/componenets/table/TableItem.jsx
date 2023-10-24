export const TableItem = ({
  year,
  totalSavings,
  interest,
  totalInterest,
  investedCapital,
}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{totalSavings}</td>
      <td>{interest}</td>
      <td>{totalInterest}</td>
      <td>{investedCapital}</td>
    </tr>
  );
};
