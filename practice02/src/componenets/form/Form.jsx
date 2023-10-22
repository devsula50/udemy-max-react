import { Input } from "./Input";
import { useState } from "react";
import styles from "./Form.module.css";

export const Form = ({ onCalculate, onReset: handleReset }) => {
  const [userInput, setUserInput] = useState({
    "current-savings": null,
    "yearly-contribution": null,
    "expected-return": null,
    duration: null,
  });

  const handleChange = (identifier, value) => {
    if (identifier === "current-savings") {
      setUserInput({ ...userInput, "current-savings": value });
    } else if (identifier === "yearly-contribution") {
      setUserInput({ ...userInput, "yearly-contribution": value });
    } else if (identifier === "expected-return") {
      setUserInput({ ...userInput, "expected-return": value });
    } else if (identifier === "duration") {
      setUserInput({ ...userInput, duration: value });
    }
  };

  const handleSubmitting = (e) => {
    e.preventDefault();
    onCalculate(userInput);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitting}>
      <div className={styles["input-group"]}>
        <Input
          type={"number"}
          id={"current-savings"}
          label={"Current Savings ($)"}
          handleChange={handleChange}
        />
        <Input
          type={"number"}
          id={"yearly-contribution"}
          label={"Yearly Savings ($)"}
          handleChange={handleChange}
        />
      </div>
      <div className={styles["input-group"]}>
        <Input
          type={"number"}
          id={"expected-return"}
          label={"Expected Interest (%, per year)"}
          handleChange={handleChange}
        />
        <Input
          type={"number"}
          id={"duration"}
          label={"Investment Duration (years)"}
          handleChange={handleChange}
        />
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
