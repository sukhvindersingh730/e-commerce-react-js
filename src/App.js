import React, { useState } from "react";
import { Navbar } from "./component/Navbar";
import { Product } from "./component/product";
import { ProductDatial } from "./component/Buy";
import { Search } from "./component/Search";
import { Cart } from "./component/Cart";
import { Form } from "./component/Form";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { items } from "./component/data";


function App() {
  const [data, setData] = useState([...items]);


  // cart
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar setData={setData} cart={cart}/>
        <Routes>
          <Route path="/" element={<Product 
          cart={cart} setCart={setCart}
          items={data} />}></Route>
          <Route path='Buy/:id' element={<ProductDatial/>}></Route> 
          <Route path='/search/:term' element={<Search/>}></Route>
          <Route path='/cart' element={<Cart cart={cart}/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
