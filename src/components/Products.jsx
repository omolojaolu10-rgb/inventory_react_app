import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"


const Products = () => {
    const {products,setProducts} = useContext(ProductsContext)
    let count = 1
    // a function that respond to clicking of del btn
    const handleDelete = (id) => {
        //send a request to the endpoint that wiil do the actual del from db
        // remove the prod with that id form products state
        const filteredProducts = products.filter(function (prod) {
            return prod.id != id
        })
        setProducts(filteredProducts)
        console.log(products);
        
    }
  return (
    <div className="bg-purple-900 text-center justify-center">
          <h1 className="text-center font-bold text-3xl">Products Inventory</h1>
          <div>
              <table border="3">
                  <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                  </thead>
              
                  <tbody>
                      
                      {
                          products && products.length > 0 && products.map((pro) => {
                              return (
                                  <tr key={pro.id}>
                                      <th>{ count++ }</th>
                                      <th>{ pro.name }</th>
                                      <th>{ pro.quantity }</th>
                                    <th><button onClick={function () {
                                        handleDelete(pro.id)
                                    }}>Delete</button></th>
                                </tr>
                              )
                          })
                      }
                      
            </tbody>
            </table>
          </div>
          
    </div>
  )
}
export default Products