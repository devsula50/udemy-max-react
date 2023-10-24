export const Input = ({ type, id, label, handleChange }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        onChange={(e) => handleChange(id, e.target.value)}
      />
    </p>
  );
};
