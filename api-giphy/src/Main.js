import React, {useState} from "react";
import Search from './component/Search'

const Main = () => {

    const [categories, setCategories] = useState(['one push ', 'dragon ball', 'naturo '])

    return (
        <div className="container">
            <Search setCategories = {setCategories}/>
            <h1>
                <ol>
                    {categories.map((ca, index)=><li key={ca+index}>{ca}</li>)}
                </ol>
            </h1>
        </div>
    )
}


export default  Main;