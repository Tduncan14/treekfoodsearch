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
  

 /* async componentDidMount(){

    try{
        const data = await fetch(this.state.url);
        const jsonData = await data.json();
    
    
        this.setState({recipe:jsonData.recipe})
        }catch(error){
          console.log(error);
        }
  
   }
*/

    render(){
         console.log(this.state.recipe);
        const{image_url,ingredients,publisher,publisher_url,title,source_url,url} = this.state.recipe

        return( 
            <React.Fragment>
              <div className ="container">
              <div className ="row">
              <div className ="col-10 mx-auto col-md-6 my-3">
              <button type="button" className="btn-warning mb-5 text-capitalize rounded">
               Back To List
              </button>
              <img src={image_url} className="d-block w-10" alt="food" />
              </div>
              {/*details section */}
               <div className ="col-10 mx-auto col-md-6 my-3">
                 <h6 className="text-uppercase">{title}</h6>
                 <h6 className ="text-warning text-capitalize text-slanted">
                  Provided to you by: {publisher}    </h6>
                  
                  <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">Publisher Webpage</a>
                  
                  <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 text-capitalize mx-3">Source url</a>
               
                  <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">ingredients</h2>
                {
                    ingredients.map((item,index)=>{
                      return (<li className="list-group-item text-slanted" key={index}>{item}</li>)
                    })
                }

                </ul>
                </div>
               
                </div>
              </div>
            </React.Fragment>
        )
    }

}

export default RecipeDetails