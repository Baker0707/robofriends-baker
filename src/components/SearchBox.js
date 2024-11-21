import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="tc pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="search robots"
                onChange={searchChange} // Call the searchChange prop here
            />
        </div>
    );
};

export default SearchBox;
