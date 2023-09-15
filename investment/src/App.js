import React from "react";

import logo from './assets/investment-calculator-logo.png';
import Header from "./components/Header/Header";
import CalcForm from "./components/CalcForm/CalcForm";
import Result from "./components/Result/Result";

function App() {
  /*
   const calculateHandler = (userInput) => {
   // Should be triggered when form is submitted
   // You might not directly want to bind it to the submit event on the form though...

   const yearlyData = []; // per-year results

   let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
   const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
   const expectedReturn = +userInput['expected-return'] / 100;
   const duration = +userInput['duration'];

   // The below code calculates yearly resu-lts (total savings, interest etc)
   for ( let i = 0; i < duration; i++ ) {
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
   };
   */

  const DUMMY_RESULT_LIST = [
    { year: 1, totalSavings: 2, interest: 3, totalInterest: 4, investedCapital: 'Awesome' }
  ]

  return (
    <div>
      <Header imgSrc={logo} alt={"logo"} />

      <CalcForm />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Result resultList={DUMMY_RESULT_LIST} />
    </div>
  );
}

export default App;
