import React from "react";
import PropTypes from "prop-types";

function RecipeItem({ children }) {
	return <div>{children}</div>;
}

    RecipeItem.propTypes = {
	children: PropTypes.array.isRequired
};

export default RecipeItem;