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
     base_url:"https://www.food2fork.com/api/search?key=983abcc4a754078ed066d108ce6d0b21",
     details_id:35380,
     pageIndex:1,
     search:'',
     query:`&q=`,
     error:''

   };


   async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: "sorry, your search did not return any results" };
        });
      } else {
        this.setState(() => {
          return { recipes: jsonData.recipes, error: "" };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

 componentDidMount(){
   this.getRecipes()
   }

  
   displayPage =(index)=>{
     switch(index){
       default:
       case 1:
       return(<RecipeList  
        recipes ={this.state.recipes}
         handleDetails={this.handleDetails}
         value={this.state.search}
         handleChange={this.handleChange}
         handleSubmit={this.handleSubmit}
         error={this.state.error}/>)
       case 0:
       return( <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>)
     }
   }
   
   handleIndex =index =>{
    this.setState({
      pageIndex:index
    })
  }

  handleDetails =(index,id) =>{
    this.setState({
      pageIndex:index,
      details_id: id
    });

  };

  handleChange = (e) =>{
    this.setState({
      search:e.target.value
    },console.log(this.state.search))
  }


  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return { url: `${base_url}${query}${search}`, search: "" };
      },
      () => {
        this.getRecipes();
      }
    );
  };
  render() {
    
    return (
      <React.Fragment>
      {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    )
  }
}

export default App;
