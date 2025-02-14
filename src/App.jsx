 import { Route, Routes } from "react-router-dom"

import ProductPage from "./assets/pages/ProductPage"
import OverviewPage from "./assets/pages/OverviewPage"

import Sidebar from "./assets/components/Sidebar"
 
 


const App = () => {

  return (
    <div className="flex h-screen bg-gray-900  text-gray-100 overflow-hidden">


        <div className=" fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
            <div className=" absolute inset-0 backdrop-blur-sm"></div>
            
        </div>
        <Sidebar/>

        <Routes>
          <Route path="/charts" element={<OverviewPage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
         
        </Routes>
    </div>
  )
}

export default App
