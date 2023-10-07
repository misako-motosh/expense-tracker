import { createContext, useState } from "react";
export const ExpenditureContext = createContext();

function ExpenditureProvider({children}) {
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [cost, setCost] = useState("");
    const [expenditureItems, setExpenditureItems] = useState([]);
    const [allExpenses, setAllExpenses] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    
    const calculateTotalCost = () => {
        return expenditureItems.reduce((total, item) => total + item.cost, 0);
    };

    return(
        <ExpenditureContext.Provider value={{itemName, setItemName, category, setCategory, cost, setCost, expenditureItems, setExpenditureItems, calculateTotalCost, allExpenses, setAllExpenses, filteredExpenses, setFilteredExpenses}}>
            {children}
        </ExpenditureContext.Provider>
    )
}

export default ExpenditureProvider;