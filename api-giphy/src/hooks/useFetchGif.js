import {useEffect, useState} from "react";
import {getGif} from "../helpers/getGif";

export const useFetchGif = (word, amount ) =>{
    const [state, setState ] = useState({
        data:[],
        loading: true,
    })
    useEffect(()=>{
        getGif(word, amount)
            .then(imgs=> setState({
                data: imgs,
                loading: false
            }));

    },[ ])

    return state;

}