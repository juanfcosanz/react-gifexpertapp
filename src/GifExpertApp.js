import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //este es un objeto inmutable
    //const categorias = ['Anime','Manga','Gore']; //debemos evitar que los elementos esten duplicados, sino tendremos un error
    const [categorias, setCategorias] = useState(['One Punch'])
    
    /*const handlerAdd = () => {
        //setCategorias([...categorias, 'Demon Slayer']); // con el set le decimos a REACT que el estado cambio y debemos renderizar nuevamente, cada que lo usamos creamos un nuevo elemento y el anterior es eliminado 
        setCategorias( cats => [...cats, 'Demon Slayer']); // setCategorias tiene un callback con el estado anterior y le concatenamos el nuevo
    };*/

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategorias = {setCategorias}/>
            <hr/>
            {/* <button onClick={ handlerAdd }>Agregar</button> */}
            <ol>
                {
                    categorias.map (categoria => ( //map es un metodo de un arreglo para iterrar
                        //el map recibe 2 argms -> valor y el indice
                        //<li key={categoria}>  {categoria}</li> //solucion usando el indice, esto no se recomienda, es decir usar el indice ya que puede haber datos duplicados
                         <GifGrid key={categoria} categoria = {categoria}/>
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;