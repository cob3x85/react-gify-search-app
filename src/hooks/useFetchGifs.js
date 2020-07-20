// Los Hooks se nombran con la palabra 'use' --useState, useEffects, useCustomHook

import { useState, useEffect } from "react";
// Importamos el helpers que contiene la llamada al API Endpoint
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {


    // useState sirve para crear un estado y poder avisar cuando el estado ha sido modificado.
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Effects no pueden ser async
    useEffect(() => {
        getGifs(category).then(imgs => {

            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category])



    return state;
}
