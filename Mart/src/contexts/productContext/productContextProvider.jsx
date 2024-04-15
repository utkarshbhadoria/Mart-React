import { useState } from "react";
import { createContext } from "react";

const ProductContext = createContext()

 function ProductContextProvider({children}){
    const [details, setDetails] = useState();


    return(
        <>
        <ProductContext.Provider value={{details, setDetails}}>
            {children}
        </ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider