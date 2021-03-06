import React ,{Component} from 'react';

class RecipeSearch extends Component{

    render(){
        const{value,handleChange,handleSubmit} = this.props
        return(
            <React.Fragment>
            <div className ="container">
             <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h1 className="text-slanted text-capitalize">
                 Hangry? Search for Food to Cook <strong className="text-danger">...Yummy!!</strong>
                </h1>
                <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                seperate ingredients by commas
                </label>
                <div className="input-group">
                <input type="text" className=" form-control rounded" 
                name="search" 
                placeholder="orange,chicken,cucumbers"
                value={value}
                onChange={handleChange} />
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