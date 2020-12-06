import React, { useState, useEffect } from "react";
import RecipeItem from './RecipeItem';
import RecipeSearch from './RecipeSearch';
import { BASE_URL } from "./api";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);


    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {setRecipes(json.results); setFilteredRecipes(json.results);})
            .catch(error => console.log(error))

    }, []);
    
    const filterRecipes = function(e) {
                const searchValue = e.target.value.toLowerCase();
                const filteredArray = recipes.filter(function(char) {
                    const lowerCaseTitle = char.title.toLowerCase();
                    if (lowerCaseTitle.startsWith(searchValue)) {
                        
                        return true;
                    }
                    return false;
                });
                setFilteredRecipes(filteredArray);
    };

    return (
        <>
        <RecipeSearch handleSearch={filterRecipes} />
        <RecipeItem>
            {filteredRecipes.map(recipe => (
                <div key={recipe.title}>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.thumbnail} alt={recipe.title} />
                    </div>
            ))}
        </RecipeItem>
        </>
    );
}

export default RecipeList;