import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( ()=>{
        getGrif();
    }, [])

    const getGrif = async() =>{

        const url = "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=xygE4JSp5ACW95idAIoNzzzD25KA2fxL";
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img=>{

            return {
                id      :   img.id,
                title   :   img.title,
                url     :   img.images.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
    }


    //getGrif();

    return (
        <div className= "card-grid">
            <h3> { category } </h3>
            
            {
                images.map(img =>(
                    <GifGridItem  
                        
                        key = {img.id}
                        {...img}
                    />
                ))
            }


        </div>
        
            
            
        
    )
}
