import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export  const GifExpertApp = () =>{

    const [categorias,setCategorias] = useState(['One punch']);

    /*const addCategory =()=>{
        setCategorias(['Nueva categoria',...categorias]);
        console.log('hola');
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategorias = { setCategorias} />

            <ol>
                {
                    categorias.map(category =>(
                        <GifGrid 
                            key={ category }
                            category={category} 
                        />
                    )
                       
                    )
                }
            </ol>
        </>
    )
}
