import { useState } from "react";
import NavBar from "../components/layout/Header";
import SideFilter from "../components/product/SideFilter";

const Store = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    return (
        <>
            <NavBar />
            <button onClick={toggleFilter} className={`relative bottom-14 ml-20 z-30 bg-blue-500 text-white py-2 px-4 rounded ${isFilterVisible ? "bg-red-500" : ""}`
            }>
                {isFilterVisible ? "Hide Filter" : "Show Filter"}
            </button>
            {isFilterVisible && <SideFilter />}

        </>
    );
};

export default Store;


