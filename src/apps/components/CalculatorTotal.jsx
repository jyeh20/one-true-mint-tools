import React from "react";
import CompoundCalculator from "./CompoundCalculator";
import { formatNumberStringWithCommas } from "../../assets/utils";

const CalculatorTotal = (props) => {
  const { interestData } = props;
  const calculator = new CompoundCalculator(interestData);
  return (
    <div className="tool-amount-display">
      <h3 className="tool-amount-display-header">
        Your total savings after {interestData.timeInYears} years:
      </h3>
      <h1 className="tool-amount-display-amount">
        $
        {formatNumberStringWithCommas(
          calculator.roundDecimal(
            Number.parseFloat(
              calculator.recurringCompoundCalc(
                interestData.recurringContribution,
                interestData.interestRate,
                interestData.compoundRate,
                interestData.timeInYears
              )
            ) +
              Number.parseFloat(
                calculator.initialCompoundCalc(
                  interestData.initialInvestment,
                  interestData.interestRate,
                  interestData.compoundRate,
                  interestData.timeInYears
                )
              )
          )
        )}
      </h1>
    </div>
  );
};

export default CalculatorTotal;
