import React, { Component } from 'react';
import "./App.css";
// Temporay so api limit won't be reached
//keep moving forward
import{recipes} from './tempList';
import{recipe} from './tempDetails';
/// Temporay stuff ends
import Recipe from './components/Recipe'
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import RecipeSearch from './components/RecipeSearch';
class App extends Component {
  render() {
    return (
      <React.Fragment>
      Hello Treek {" "}

      <RecipeList />{" "}
      <RecipeDetails />
 
      </React.Fragment>
    )
  }
}

export default App;
