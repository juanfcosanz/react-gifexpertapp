import { useEffect, useState } from 'react'; //no es requerido a menos que se use jsx
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {

    //este estado nos ayuda para cambiar el estado de los componentes y renderizar nuevamnete la informacion
    const [estado, setEstado] = useState({ //estado inicial del hooks cuando se carga
        data: [],
        loading: true
    });
    
    useEffect( () => {  // recibe como argms una funcion, la cuáLqueremos ejecutar y como 2do. una lista de dependencias
        getGifs(categoria)  //esto es una promesa que hasta que se resuelva regresara los gifs
            .then(gifs => {  //si todo es ok
                setEstado({ 
                    data: gifs,
                    loading: false
                });
            })
    }, [categoria]);  // al poner los [] vacios, el useEffect ejecuta el código solo cuando el componente es renderizado por primera vez, a pesar de que haya cambios como contadores, etc.
    //cuando ponemos la categoria, le decimos que si cambia la categoria queremos se ejecute el efecto
    

     /* setTimeout(() => {
        setEstado({ //estado inicial del hooks cuando se carga
            data: [1,2,3,4,5],
            loading: false
        })
    }, 3000); //3 seg */

    // no tiene un return  
    return estado;  //{ data: [],loading: true}
}