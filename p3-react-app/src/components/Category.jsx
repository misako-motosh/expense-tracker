import React, { useState } from "react";
import { categories } from "../data/categoryOptions";

    function Category({onSelectCategory}) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        onSelectCategory(category);
    };

    return (
        <div>
            <select value={selectedCategory} onChange={handleCategoryChange} className="category-dropdown">
                <option value="">All Categories</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Category;
