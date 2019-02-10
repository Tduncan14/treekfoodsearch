import React, { Component } from 'react';
import Recipe from './components/Recipe'
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import RecipeSearch from './components/RecipeSearch';
class App extends Component {
  render() {
    return (
      <React.Fragment>
      Hello Treek {" "}

      <Recipe />{" "}
      <RecipeDetails />{"    "}
      <RecipeList />{" "}
      <RecipeSearch />{" "}
      </React.Fragment>
    )
  }
}

export default App;
