
import { createContext, useState } from "react"
// import { useEffect } from "react"



//1 create a context

export const ProductsContext = createContext()
//create a provider for productContext:it will provide the product state
export const ProductsProvider = ({ children }) => {
    // feetch the lsit of products from local storage,if no product is there fetch empty array
const productDey = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []

const productsList = []
const [products, setProducts] = useState(productsList)
    
    return (

        
        <ProductsContext.Provider value={{products,setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const ThemeContext = createContext("light")

//2 create a provider
    


































































// {
//       id: 1,
//       name: "Black Marker",
//       quantity: 5
//     },
//     {
//       id: 2,
//       name: "Laptops",
//       quantity: 3
//     },
//     {
//       id: 3,
//       name: "AI bot",
//       quantity: 10
//     }