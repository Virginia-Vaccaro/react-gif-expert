import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState(' ');  //funcion de estado para agregar categorías

    const onInputChange = ( {target} ) => {   //para no poner acá event y abajo event.target.value, se desestructura el {target} del event y abajo tampoco se escribe
        setInputValue( target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();       //para no refrescar el input
        if( inputValue.trim().length <= 1) return;  //validar que el input no sea vacio o de 1 caracter
        
        // setCategories( categories => [ inputValue, ...categories ]);  //recibo setCategories del GifExpertApp , desestructuro categories y le agrego el nuevo valor
        onNewCategory( inputValue.trim() );
        setInputValue('');  //limpia el imput luego del enter
    }

  return (       //el input se pone en el form / el form tiene onSubmit que es para que no se refresque la pag cuando se escribe algo nuevo en el input
    <form onSubmit={ onSubmit }>   
         <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }  //para modificar lo que se escribe en el input y agregarlo al array
        />
    </form>
   
  )
}


