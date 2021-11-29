import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategorias }) => {

    const [inputValue,setInputValue] = useState('');

    const changeValue = (e) =>{

        console.log(e.target.value);
        setInputValue(e.target.value);
        
    }

    const addCategory = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){

            console.log('aGRENGANDO CATEGORY');
            setCategorias( cats => [...cats,inputValue]);
            setInputValue('');
        }
        
    }

    return (
        <>
        <form onSubmit = { addCategory }>
            <input
                type = "text" 
                value = { inputValue }
                onChange = { changeValue }
            />

        </form>
            
            
        </>
    )
}


