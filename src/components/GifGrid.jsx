import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    
    const {images, isLoading} = useFetchGifs(category);
    
    return (
    <>
        <h3>{ category }</h3>
        {/* { isLoading ? (<h2>Cargando...</h2>) : null} */} 
        {
            isLoading && (<h2>Cargando...</h2>) // esto es lo mismo que la línea anterior, es un if 
        }
        <div className="card-grid">
            {
                images.map( (image) => (    //despues de la flecha pongo directamente () porq lo siguiente es un return implícito
                    <GifItem
                        key={ image.id}
                        { ...image }     // en esta linea hago que se exparsan las propiedades de image para usarlas en GifItem(title y url)
                    />
                ))
            }
        </div>
        
    </>
  )
}


