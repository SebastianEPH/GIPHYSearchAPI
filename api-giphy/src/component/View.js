import propTypes from 'prop-types'
import React, {useEffect, useState} from "react";

const View = ({word, search, amount, setSearch, amountSearch, setAmountSearch})=>{

    useEffect(()=>{
        getGif()
    },[])

    const [gif , setGif] =  useState([''])


    const getGif = async () =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(word)}&limit=${amount}&api_key=6iV1aQTJJpIFzStqFP8ZyrvDy617uyMy`;

        console.log(url)
        console.log(word)
        const res = await fetch(url)
        //res.ok? console.log('ok'):console.log('error pex')
        const {data} = await res.json()
        // limpiando api
        const gif = data.map(img=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        setGif(gif)
        console.log(gif)

    }
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
            <h3 className='text-center'> {word}</h3>
            <button onClick={handleClear}> Clear Gif from <code>{word}</code></button>
             {gif.map((img, index)=>{
                 return(
                     <div key={index+img.title} className='col-md-3 p-2  p-1 border border-danger'>
                         <div className="card" style={{width: "18rem"}} >
                             <h5 className="card-title">{img.title}</h5>
                             <img src={img.url} className="card-img-top" alt="..."/>
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