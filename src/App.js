import Header from "./components/Header";
import Foot from "./components/Foot";
import { Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  let [prod,setProd] = useState([]);
  let [showCart,setShowCart] = useState(false);
  let [category,setCategory] = useState([]);

  function funaddCart(products){
    setProd((arr)=>[...arr,products])
  }

  function toggleCart(){
    setShowCart((flag)=>!flag)
  }



  return (
    <>
    <Header cartItemCount={prod.length} toggleCart={toggleCart} category={category}/>
    <Home funaddCart={funaddCart} setCategory={setCategory} category={category}/>
    {
     showCart && <Cart data={prod}/>
    }
    <Foot/>
    <Routes>
      <Route path="/login" Component={Login}> </Route>
      <Route path="/signup" Component={Signup}> </Route>
    </Routes>
    </>
  );
}

export default App;
