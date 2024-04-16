import { useState } from "react";
import  ProductContext  from "./productcontext"

 function ProductContextProvider({children}){
    const [details, setDetails] = useState(null);
    const [mode , setMode] = useState('light');
    const [value, setValue] = useState()
    const [loading, setLoading] = useState(false)
    const toggleMode = () =>{
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = 'black'
        }
        else{
          setMode('light')
          document.body.style.backgroundColor = 'white'
        }
      
      }


    return(
        <>
        <ProductContext.Provider value={{details, setDetails , mode , toggleMode, value ,setValue , loading , setLoading}}>
            {children}
        </ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider