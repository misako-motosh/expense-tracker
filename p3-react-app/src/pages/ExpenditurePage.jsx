import BackButton from "../components/BackButton";
import AddItem from "../components/AddItem";
import { useContext, useState, useEffect } from "react";
import { ExpenditureContext } from "../components/ExpenditureProvider";
import Category from "../components/Category";

function ExpenditurePage() {
  const {
    expenditureItems,
    setExpenditureItems,
    allExpenses,
  } = useContext(ExpenditureContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const calculateTotalCost = () => {
    return expenditureItems.reduce((total, item) => total + item.cost, 0);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...expenditureItems];
    updatedItems.splice(index, 1);
    setExpenditureItems(updatedItems);

    if (filteredExpenses.length > index) {
        const updatedFilteredExpenses = [...filteredExpenses];
        updatedFilteredExpenses.splice(index, 1);
        setFilteredExpenses(updatedItems);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredExpenses(allExpenses);
    } else {
      const filtered = allExpenses.filter((expense) => expense.category === selectedCategory);
      setFilteredExpenses(filtered);
    }
  }, [selectedCategory, allExpenses]);

  return (
    <>
      <div className="expenditure-background">
        <header>
          <BackButton />
          <h2>Expenditures</h2>
          <Category onSelectCategory={handleCategoryChange} />
        </header>
        <div className="expenditure-sections">
          <div className="expenditure-table">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Cost</th>
                  <th id="light">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((item, index) => (
                  <tr key={index}>
                    <td>{item.itemName}</td>
                    <td>{item.category}</td>
                    <td>{item.cost}</td>
                    <td>
                      <button onClick={() => handleDeleteItem(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="expenditure-side">
            <h4>Total: {calculateTotalCost()}</h4>
            <AddItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenditurePage;
