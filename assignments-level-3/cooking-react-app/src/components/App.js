import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList'
import '../css/app.css'
//this import below is to get random id's, I downloaded the uuid package
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

export default function App() {
  const[selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  //to load old recipes from local storage - useEffect Hook
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  // to save recipes to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {  
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  //functionality for edit button
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  //functionality for add recipe button
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: ''
        }
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  //function to change the recipe ***
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }


  //functionality for delete recipe button
  function handleRecipeDelete(id) {
    if(selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]
