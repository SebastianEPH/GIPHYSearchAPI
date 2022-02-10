import propTypes from 'prop-types'
import React from "react";
import {useFetchGif} from "../hooks/useFetchGif";

const View = ({word, search, amount, setSearch, amountSearch, setAmountSearch})=>{


    const {data:gif, loading }= useFetchGif(word, amount);

    const handleClear = () =>{
        let newSearch = []
        let newAmount = []
        search.forEach((p, index)=>(p!==word)?
            newSearch.push(p) &&
            newAmount.push(amountSearch[index])
            :false
        )
        setAmountSearch(newAmount)
        setSearch(newSearch)
    }

    return (
        <div className="row justify-content-center">
            <div className="alert alert-dark m-0 p-0" >
                <div className="row justify-content-center ">
                    <h3 className='col-md-11 text-center'> {word}</h3>
                    <button className='col-md-1 btn btn-close text-center ' onClick={handleClear}> </button>
                </div>
            </div>
            {loading && <p>Loading</p>}
             {gif.map(({title, url}, index)=>{
                 return(
                     <div key={index+title} className=' col-md-3 card'>
                         <div className="card p-2"  >
                             <h5 className="card-title">{title}</h5>
                             <img src={url} className="card-img-top" width="20" alt={title}/>
                         </div>
                     </div>
                 )
             })}
        </div>
    )
}
View.PropType={
    word: propTypes.string.isRequired,
    search:propTypes.array.isRequired,
    setSearch:propTypes.func.isRequired,
    amount:propTypes.string.isRequired,
    amountSearch: propTypes.array.isRequired,
    setAmountSearch: propTypes.func.isRequired
}
export default View;

//