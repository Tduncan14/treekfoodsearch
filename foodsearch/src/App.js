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
   state ={
     recipes:recipes,
     url:"https://www.food2fork.com/api/search?key=983abcc4a754078ed066d108ce6d0b21",
     details_id:35387

   };

   /*async getRecipes(){
    try{
    const data = await fetch(this.state.url);
    const jsonData = await data.json();


    this.setState({recipes:jsonData.recipes})
    }catch(error){
      console.log(error);
    }

   }

   componentDidMount(){
      this.getRecipes()
   }
*/

  render() {
    console.log(this.state.recipes);

    return (
      <React.Fragment>
     
      {/*<RecipeList  recipes ={this.state.recipes}/>{" "}*/}
      <RecipeDetails id={this.state.details_id}/>
 
      </React.Fragment>
    )
  }
}

export default App;
