

export const getGIfs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=YjMClhgGjPCK87GUHZefH80JJCMBBOrw`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
  
    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
};