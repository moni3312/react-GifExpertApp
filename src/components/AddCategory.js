import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();//para que no recargue la pagina

        if(inputValue.trim().length > 2){
        setCategories(cats => [inputValue, ...cats]);
        setInputValue('');
        }
    }

    return (
        <form onSubmit= {handleSubmit}>
            <p>{inputValue}</p>
                <input 
                    type="text"
                    placeholder= "Escriba el tema de su Gif....."
                    value= {inputValue}
                    onChange= {handleInputChange}
                />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
