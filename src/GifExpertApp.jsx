import { useState } from "react";7
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {   //creamos la funcional component
    
    const [categories, setCategories] = useState( ['One Punch'] );  // usamos esta hook xq el html se va a modificar con cada búsqueda de gif que se haga
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; //cuando el if termina en return solo, significa que si se cumple la condición no sucede  nada, tampoco la acción de la línea de abajo
        setCategories([newCategory, ...categories]); //usamos el setCategories para generar un arreglo nuevo/ los 3 puntos indican una copia de categories y se le agrega el elemento Valorant
    }

    return(
        <>
            <h1>GifExpertApp</h1>

            {/* input , envio el setCategories al AddCategory*/}
            <AddCategory  
                onNewCategory={(event) => onAddCategory(event)}  //esta es una propiedad del componente (onNewCategory) para agregar nuevas categorías
            />
            
            
            { categories.map(category => (
                <GifGrid 
                key={category} 
                category={category}/>
            ))
            }
            
        </>
    )
}