import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        // metodo que se va a ejecutar mediante el Effect
        getGifs(category)
            .then(imgs => setImages(imgs))

    }, [category]) // [] Array vacio quiere decir que no tiene asignada ninguna referencia que va a disparar el Effect nuevamente
    // Como sabemos que el valor de categoria va a cambiar es necesario agregarlo a las dependencias y evitar el error a continuacion:
    // React Hook useEffect has a missing dependency: 'getGifs'. Either include it or remove the dependency array  react-hooks/exhaustive-deps


    // getGifs(); // Los effects no se tiene que disparar fuera de UseEffect

    return (
        <>
            <h3> {category} </h3>
            <div className="card-grid">
                {/* <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)}></button>
            */}
                {

                    /*  Ejemplo nomrmal
                    images.map(item => (
                        <li key={item.id}> {item.title}</li>
                    )) */

                    /* Ejemplo Desestructurado  */
                    images.map(({ id, title, url }) => (
                        <GifGridItem key={id} id={id} title={title} url={url} />
                        /* <GifGridItem key={id} id={id} {...images} /> */ /* Whenever you want to send the complete object  */

                    ))
                }
            </div>
        </>
    )
}
