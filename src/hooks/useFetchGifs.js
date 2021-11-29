import { useEffect, useState } from "react";
import { getGrif } from '../helpers/getGifs';

export const  useFetchGifs  = ( category ) => {

    const [state,setState] = useState({
        data    : [],
        loading : true
    });

    useEffect(()=>{

        getGrif(category).then(imgs=>{
            setState({
                data    : imgs,
                loading : false,
            })
        })

    }, [category])

    return state;

}