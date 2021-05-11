import { useEffect, useState } from "react"
import { getGIfs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{

        getGIfs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })//setState
            })

    },[category]) 
//useEffect lo que hace es recargar el componente solo si cambia lo que esta entre [] osea solo si cambia category
//para que no afecte nigun boton o algo externo haga que se vuelva a cargar el componente o en este caso el getGifs

    return state; //{data:[], loading:true};
}