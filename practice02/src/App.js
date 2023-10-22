import logo from "./assets/investment-calculator-logo.png";
import { Header } from "./componenets/Header";
import { Form } from "./componenets/form/Form";
import { Table } from "./componenets/table/Table";
import { useState } from "react";

function App() {
  const [calculatedResult, setCalculatedResult] = useState([]);
  const [isNoData, setIsNoData] = useState(false);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = [];

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setCalculatedResult(yearlyData);
    yearlyData.length === 0 ? setIsNoData(true) : setIsNoData(false);
  };

  const handleReset = () => {
    setCalculatedResult([]);
    setIsNoData(false);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} onReset={handleReset} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {(calculatedResult.length > 0 || isNoData) && (
        <Table result={calculatedResult} isNoData={isNoData} />
      )}
    </div>
  );
}

export default App;
