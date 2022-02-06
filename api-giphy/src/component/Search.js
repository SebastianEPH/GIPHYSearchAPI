import {useState} from "react";
import propTypes from 'prop-types'

const Search = ({setCategories})=>{

    const [inputValue , setInputValue] = useState('')

    function handleInputChange(e){
        //setText(inputValue + e.nativeEvent.data)
        ///console.log(inputValue + e.nativeEvent.data)
        console.log(e.target.value)
        setInputValue(e.target.value)

    }
    function handleSubmit(e){
        e.preventDefault()
        //console.log(e)
        //console.log(categories)
        // verifica si el recuadro está vacio
        if(inputValue.trim().length <= 0){
            console.log('el texto está vacio')
        }else{
            setCategories(cats =>([...cats, inputValue]));
            setInputValue('')
            //e.target.value = 'vacio '

        }
    }

    return(
     <form onSubmit={handleSubmit}>
         <h2>Search</h2>
         <input
             onChange={handleInputChange}
             type="text"
             defaultValue={inputValue}

         />
     </form>
    )
}
Search.propTypes = {
    setCategories: propTypes.func.isRequired
}

export default Search;