import React, { useContext } from "react"
import BackButton from "../components/BackButton";
import ClearButton from "../components/ClearButton";
import { SourceContext } from "../components/SourceProvider";

function IncomePage() {

  const { source1, setSource1, source2, setSource2, others, setOthers } = useContext(SourceContext);
  return (
    <>
    <div className="income-background">
      <header>
        <BackButton />
        <h2>Source of Income</h2>
        <div/>
      </header>
      <div className="income-main-container">
        <div className="income-container">
          <p className='income-p'>Income Source #1</p>
          <input
            type="number"
            className="income-input"
            placeholder="0"
            value={source1}
            onChange={(e) => setSource1(Number(e.target.value))}
          />
        </div>
        <div className="income-container">
          <p className='income-p'>Income Source #2</p>
          <input
            type="number"
            className="income-input"
            placeholder="0"
            value={source2}
            onChange={(e) => setSource2(Number(e.target.value))}
          />
        </div>
        <div className="income-container">
          <p className='income-p'>Others</p>
          <input
            type="number"
            className="income-input"
            placeholder="0"
            value={others}
            onChange={(e) => setOthers(Number(e.target.value))}
          />
        </div>
        <ClearButton/>
      </div>
    </div>
  </>
  );
}

export default IncomePage;
  