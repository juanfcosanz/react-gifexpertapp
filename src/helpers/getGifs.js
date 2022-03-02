const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria)}&limit=10&api_key=qnMdPXSBFEaeGSiEaDTyv2qnQIX8yqry`;
    try {
        const response = await fetch( url ); // fetch retorna una promesa
        console.log(response);
        const {data} = await response.json(); // la data se obtiene hasta que se resuelve la promesa
        
        const gifs = data.map( img => { //extraemos de cada imagen el id, de la respuesta de la promesa
            return {
                id: img.id,
                titulo: img.title,
                url: img.images?.downsized_medium.url // con el caracter ? , decimos que si viene el campo lo tome
            }
        }); 
        console.log(gifs);
        //setImagenes(gifs), no lo tenemos 
        return gifs;
    } catch (error) {
        console.warn(error);
    }
}

export {
    getGifs
}