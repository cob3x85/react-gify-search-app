import React, { useState } from 'react';
import './index.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // Forma 1
    //     setCategories([...categories, 'Pokemon']);

    //     // Forma 2
    //     setCategories(cats => [...categories, 'Pokemon', 'HunterXHunter']);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map( (item) => (
                        <GifGrid key={item}
                        category={item} />

                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
