import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState(''); //para guardar el estado de la caja de texto

    const handleInputChange = (e)  => { // recibimos el evento
        const input = e.target.value;// recuperamos el contenido de la caja de texto con la nueva informacion
        //console.log(e.target.value); 
        setInputValue( input);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // eliminamos el comportamiento por dedault del form cuando damos enter

        if (inputValue.trim().length > 2) {
            setCategorias( cats => [inputValue, ...cats]); //no tenemos las categooias, pero como tenemos el callback con el estado anterior solo le mandamos el nuevo input
            setInputValue('');
        }
        console.log("Submit hecho");

    }
    
    return (
        //<></> como ya tenemos un elemento "form" que agrupa los demas componente html ya no es neceario este fragment
        <form onSubmit={handleSubmit}> {/* si damos enter se retea el contenido de la caja, con la funcion eliminamos este comportameinto por default*/}
            <input 
                type='text'
                value={inputValue}
                onChange = { handleInputChange }/> {/* llamamos esta funcion cada que esribimos algo nuevo */}
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;