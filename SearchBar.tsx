import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import '../styles/SearchBar.css';

const SearchBar: React.FC = () => {
    return (
        <div className="search-bar-container">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <FaFilter className="filter-icon" />
                </div>
    );
}

export default SearchBar;