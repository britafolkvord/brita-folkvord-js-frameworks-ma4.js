import React from "react";
import PropTypes from "prop-types";


export default function RecipeSearch({ handleSearch }) {
    return (
        <form className="recipeSearch">
            <input type='text'
                placeholder="Search by name..."
                onChange={event => handleSearch(event)}
            />
        </form>
    );
}

RecipeSearch.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};