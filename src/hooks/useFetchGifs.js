// rafc (enter)
//este hook es una función que retorna algo

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
    // useEffect se usa con dos argunmentos, una función que es getGifs y una lista de dependencias que es[] vacío en este caso

    return {
        images,
        isLoading
    }
}


