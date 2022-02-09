import {useState} from "react";
import propTypes from 'prop-types'

const Search = ({setSearch})=>{

    const [inputValue , setInputValue] = useState('')

    const handleInputChange = (e)=> {
        console.log(e.target.value)
        setInputValue(e.target.value)

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length <= 0){
            console.log('el texto está vacio.,.,.,,...,')
        }else{
            setSearch(cats =>[ inputValue, ...cats]);
            setInputValue('')
            e.target.reset()
        }
    }

    const handleClearAll = ()=>{
        setSearch([])
        console.log('click delete all')
    }
    return(
     <>
         <div className="row m-2 p-2">
             <h2 >Search</h2>
             <form className="col-sm-11 " onSubmit={handleSubmit}>
                 <input
                     className="form-control "
                     onChange={handleInputChange}
                     type="text"
                     placeholder="write a word"
                     defaultValue={inputValue}
                 />
             </form>
             <button className="btn btn-danger col-sm-1" onClick={handleClearAll}>
                 Clean All
             </button>
         </div>

     </>
    )
}
Search.propTypes = {
    setSearch: propTypes.func.isRequired
}
export default Search;