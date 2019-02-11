import React,{Component} from 'react';
import {recipe} from '../tempDetails';

class RecipeDetails extends Component{
    constructor(props){
        super(props)

        this.state ={
            recipe:recipe,
            url:`https://www.food2fork.com/api/get?key=983abcc4a754078ed066d108ce6d0b21&rId=${this.props.id}`
        }
    }

    render(){
         console.log(this.state.recipe);
        const{imageUrl,ingredients,publisher,publisherUrl,title,sourceUrl,url} = this.state.recipe

        return( 
            <React.Fragment>
             <h2>   Keep moving for Treek from details</h2> 
            </React.Fragment>
        )
    }

}

export default RecipeDetails