import React,{Component} from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
class RecipeDetails extends Component {

    render(){

        return(<React.Fragment>

          <h3> Hello from list </h3>
          <RecipeSearch />
          <Recipe />

        </React.Fragment>
        )
    }
}


export default RecipeDetails ;