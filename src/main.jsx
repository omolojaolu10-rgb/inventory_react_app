import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MealDb from "./MealDb.jsx"
import Pract from './Pract.jsx'

import { ProductsProvider } from "./contexts/ProductsContext"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
       {/* <App /> */}
      <MealDb /> 
      {/* <Pract /> */}
    </ProductsProvider>
  </StrictMode>,
)
