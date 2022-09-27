import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ThemeDetailScreen = () => {
    
    const {id} =useParams();
    const [theme, setTheme] =useState(null);


    useEffect(() => {
        fetch ("http://blog.api/theme/"+id)
        .then((resp) => resp.json())
        .then((json) =>{
        
         setTheme(json)
      
      });
  
    }, [id])
    


    return (
        <>
        <h1>Détail du theme : {theme?.title} </h1>
        <img  src={theme?.img_src}></img>
        </>
    );
};

export default ThemeDetailScreen;