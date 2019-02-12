import React ,{Component} from 'react';

class RecipeSearch extends Component{

    render(){
        return(
            <React.Fragment>
            <div className ="container">
             <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h1 className="text-slanted text-capitalize">
                 Hangry? Search for Food to Cook <strong className="text-danger">...Yummy!!</strong>
                </h1>
                <form className="mt-4">
                <label htmlFor="search" className="text-capitalize">
                seperate ingredients by commas
                </label>
                <div class="input-group">
                <input type="text" className=" form-control rounded" name="search" placeholder="orange,chicken,cucumbers" />
                <button type="submit"className="input-group-text bg-primary text-white"> <i className='fas fa-search'/> </button>
                </div>
                </form>
             </div>
            </div>
            </React.Fragment>
        )
    }
}


export default RecipeSearch