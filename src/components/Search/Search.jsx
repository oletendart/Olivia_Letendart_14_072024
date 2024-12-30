import React, { useState } from "react";
import SearchBar from "react-js-search";
import './Search.scss';

export function Search({ data, onSearchResults }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (term) => {
        setSearchTerm(term);

        const filteredData = data.filter(item => {
            return Object.values(item).some(value => 
                value?.toString().toLowerCase().includes(term.toLowerCase())
            );
        });

        onSearchResults(filteredData);
    };

    return (
        <SearchBar
            onSearchTextChange={handleSearchChange}
            placeHolderText={"Search here..."}
            data={data}
        />
    );
}
