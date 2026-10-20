// header components needs appname and it does not want it via prop drilling,it will cosume it from Products context
//import the context
import { ProductsContext } from "../contexts/ProductsContext"
//import the hook:useContext()
import { useContext,useEffect } from "react"
//destructure want you to use from inside the context

const Header = () => {

    const { products } = useContext(ProductsContext)//pulling out products from the context
    useEffect(() => {
        localStorage.setItem("products",JSON.stringify(products))
    }, [products])
    
    return (
        <div className="bg-purple-900 py-10 text-center">
            <h1 className="text-center font-bold text-3xl">Invento <span className="text-yellow-400 bg-amber-500 p-1 rounded-2xl">App</span></h1>
            <p>Counts: <span>{ products.length }</span></p>
        </div>
    )
}
export default Header