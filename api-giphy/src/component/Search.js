import {useEffect, useState} from "react";
import propTypes from 'prop-types'

const Search = ({setSearch, setAmountSearch})=>{

    const [inputValue , setInputValue] = useState('')
    const [inputRange, setInputRange ] =  useState('5')

    //useEffect(()=>{
    //    setInputRange()
    //},[])

    const handleInputChange = (e)=> {
        console.log(e.target.value)
        setInputValue(e.target.value)

    }
    const handleInputRange = (e)=>{
        console.log(e.target.value)
        setInputRange(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length <= 0){
            console.log('el texto está vacio.,.,.,,...,')
        }else{

            console.log('search antes de dar valores ')
            console.log(inputRange)
            console.log(inputValue)
            setSearch(cats =>[ inputValue, ...cats]);
            // se va a verificar si el texto se repite
            setAmountSearch(cats =>[ inputRange, ...cats]);
            setInputValue('')
            e.target.reset()
        }
    }

    const handleClearAll = ()=>{
        setSearch([])
        setAmountSearch([])
        console.log('click delete all')
    }

    return(
         <div className="row m-1 p-2">
             <div className="row">
                 <h2 className="col-md-10 ">Search:</h2>
                 <button className="btn btn-danger col-md-2" onClick={handleClearAll}>
                     Clean All
                 </button>
             </div>
             <form className=" pt-3" onSubmit={handleSubmit}>
                 <input
                     className="form-control"
                     onChange={handleInputChange}
                     type="text"
                     placeholder="Write a word and submit enter "
                     defaultValue={inputValue}
                 />
                 <span className=" position-relative translate-middle badge rounded-pill bg-primary">
                    {inputRange}
                 </span>
                     <input onChange={handleInputRange} type="range" className=" form-range px-1" defaultValue={inputRange} min="1" max="50" step="1"/>
                 </form>

         </div>
    )
}
Search.propTypes = {
    setSearch: propTypes.func.isRequired
}
export default Search;