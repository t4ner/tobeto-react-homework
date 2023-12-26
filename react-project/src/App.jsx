import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import DetailsPage from "./pages/DetailsPage"


function App() {


  return (
    <>
     <Products/>
     <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<div>Not found</div>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
