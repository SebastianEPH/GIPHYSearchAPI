import React, {useState} from "react";
import Search from './component/Search'
import View from './component/View'

const Main = () => {

    const [search , setSearch] =  useState([])
    const [amountSearch, setAmountSearch] = useState([])
    console.log('searsh principal 1')
    console.log(search)
    console.log(amountSearch)
    console.log('search principal 1')


    return (
        <div className="container border border-danger">
           <Search  setSearch={setSearch} setAmountSearch={setAmountSearch}/>
                {search.map( (word, index)  => (
                    <View
                        key={word+index}
                        word={word}
                        search={search}
                        amountSearch={amountSearch}
                        setAmountSearch={setAmountSearch}
                        amount={amountSearch[index]}
                        setSearch={setSearch}
                        />
                    ))
                }
        </div>
    )
}
export default  Main;
