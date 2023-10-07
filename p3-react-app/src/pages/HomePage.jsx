import React,  { useContext } from "react";
import {SourceContext} from "../components/SourceProvider";
import { ExpenditureContext } from "../components/ExpenditureProvider";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Logout";

function ExpenseOverviewPage() {
  //For budget-for-this-month section
  const { source1, source2, others } = useContext(SourceContext);
  const monthlyBudget = source1 + source2 + others;

  //For total-money-spent section
  const { calculateTotalCost } = useContext(ExpenditureContext);
  const totalSpent =  calculateTotalCost();

  //For remaining-budget section
  const remainingBudget = monthlyBudget - totalSpent;

  const navigate = useNavigate();

  return (
    <>
      <div className="overview-background">
        <header>
          <h3>Waism Expense Tracker</h3>
          <Logout/>
        </header>
        <div className="overview-container">
          <p>Remaining budget for this month</p>
          <h2 className="overview-pesos">{`${remainingBudget} pesos`}</h2>
        </div>
        <div className="overview-container overview-click" onClick={() => navigate('/expenditure')}>
          <p>Total money spent for the month of October</p>
          <h2 className="overview-pesos">{`${totalSpent} pesos`}</h2>
        </div>
        <div className="overview-container overview-click" onClick={() => navigate('/income')}>
          <p>Budget for the month of October</p>
          <h2 className="overview-pesos">{`${monthlyBudget !== '' ? monthlyBudget : 0} pesos`}</h2>
        </div>
      </div>
    </>
  )
}

export default ExpenseOverviewPage;
