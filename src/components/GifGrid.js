//import React, { useEffect, useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({categoria}) => {  //este componente se dispara cada que se hace un cambio en el estado del componente, por ejemplo incrementar una variable, por lo tanto se tiene que renderizar y se ejcuta todo el codigo nuevamente

    //const [imagenes, setImagenes] = useState([])
    
    //importaremos nuestro custom hook para usarlo
    const { data:imagenes, loading } = useFetchGifs(categoria);

    /* useEffect( () => {  // recibe como argms una funcion, la cuáLqueremos ejecutar y como 2do. una lista de dependencias
        getGifs(categoria)  //esto es una promesa que hasta que se resuelva regresara los gifs
            .then(gifs => {  //si todo es ok
                setImagenes(gifs);
            })
    }, [categoria]); */  // al poner los [] vacios, el useEffect ejecuta el código solo cuando el componente es renderizado por primera vez, a pesar de que haya cambios como contadores, etc.
    //cuando ponemos la categoria, le decimos que si cambia la categoria queremos se ejecute el efecto
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>
            { loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            <div className='card-grid'>
                    {
                        imagenes.map(imagen => {
                            //return <li key={imagen.id}>{ imagen.titulo}</li>
                            return <GifGridItem 
                            key={imagen.id} 
                            //imagen = {imagen}/> // esto es como normalente hacemos para mandar una properties
                            {...imagen}/> // de esta forma cada atributo de la imagen como una propiedad al componente
                        })
                    }  
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.any.isRequired
}

export default GifGrid;