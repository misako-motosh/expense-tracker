import { ExpenditureContext } from "./ExpenditureProvider";
import React, { useContext, useState } from "react";
import { categories } from "../data/categoryOptions";

function AddItem() {
    const [modal, setModal] = useState(false);
    const {itemName,
         setItemName, 
         category, 
         setCategory,
         cost,
         setCost,
         expenditureItems,
         setExpenditureItems,
         allExpenses,
         setAllExpenses,
         filteredExpenses,
         setFilteredExpenses,
         selectedCategory
        } = useContext(ExpenditureContext);

    const handleAddItem = (e) => {
        e.preventDefault();
        if (itemName && category && cost !== "") {
            const newItem = {
                itemName,
                category,
                cost: parseFloat(cost),
            };
            setAllExpenses([...allExpenses, newItem]);
            // Check if the selected category matches the filter
            if (category === selectedCategory || selectedCategory === "") {
            setFilteredExpenses([...filteredExpenses, newItem]);
            }
            setExpenditureItems([...expenditureItems, newItem]);
            setItemName("");
            setCategory("");
            setCost("");
        } else {
            alert("Add input to the three sections first before clicking Add.")
        }
    }

    const handleClearItems = () => {
        if (itemName !== "") {
            setItemName("");
        }
        if (category !== "") {
            setCategory("");
        }
        if (cost !== null) {
            setCost("")
        }
    }

    const handleModal = () => {
        setModal(!modal)
    }


    return(
        <>
            <button onClick={handleModal} className="btn-modal">+ new item</button>
            {modal && (
                <div className="modal">
                <div className="overlay" onClick={handleModal}></div>
                <div className="modal-content">
                    <button onClick={handleModal}>Back</button>
                    <h4>Add item</h4>
                    <form className='add-item-form'>
                        <label>Item Name:</label>
                        <input
                            type='text'
                            value={itemName}
                            onChange={(e)=> setItemName(e.target.value)}
                        />
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <label>Cost</label>
                        <input
                            type='number'
                            value={cost}
                            onChange={(e)=> setCost(e.target.value)}
                        />
                        <div className='add-item-btns'>
                            <button type='submit' onClick={handleAddItem}>Add</button>
                            <button type='reset' onClick={handleClearItems}>Clear</button>
                        </div>
                    </form>
                </div>
            </div>
            )}
            
        </>
    )
}

export default AddItem;