import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
//port Banner from './components/Banner'
import { products } from './components/products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import OrderHistoryPage from './components/OrderHistoryPage'
import LogIn from './components/LogIn'
import { Route,Routes } from 'react-router-dom'
import Fruits from './pages/Fruits'
import Vegitables from './pages/Vegitables'
import ProtectRoute from './components/ProtectRoute'
function App() {
const[search,setSearch]=useState("");
const[orderPlace,setOrderPlace]=useState(false)
const[cart,setCart]=useState(()=>{
  const storeCart=localStorage.getItem("cart")
  return storeCart? JSON.parse(storeCart):[]
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart))

  
}, [cart])
const[user,setUser]=useState(()=>{
 return JSON.parse(localStorage.getItem("user"))  || null;

})
const[isLogin,setIsLogin]=useState(false);

const[orders,setOrders]=useState(()=>{
  const data=localStorage.getItem("orders")
  return data ? JSON.parse(data):[];
})
  //search karne ke liye
const filterProduct=products.filter((item)=>
    {const value=search.trim().toLowerCase()
      if(value === "") return true;
      return(
      item.name.toLowerCase().includes(value)||item.category.toLowerCase().includes(value)
  )})
  // product wise search
  const fruitData=products.filter((item)=>item.category.toLowerCase()==="fruit")
  const vegitableData=products.filter((item)=>item.category.toLowerCase()==="vegetable")
    
  

  //cart me add karne ke liye function
  const addToCart=(item)=>{
    const exist=cart.find((c)=>c.id===item.id)
    // cart me item hai to increase karna ke liye
    if(exist){
      setCart((prev)=>
        prev.map((c)=>c.id===item.id
       ?{...c,qty:c.qty+1}
         :c
        ))
    }else{
      setCart((prev)=>[...prev,{...item,qty:1}])
    }
  }
  const removeFromCart=(id)=>{
    setCart((precart)=>precart.filter((c)=>c.id!==id))
  }
  const increaseQty=(id)=>{
    setCart((prev)=>
    prev.map((c)=>c.id===id
  ?{...c,qty:c.qty+1}:c))

  }
  const decreaseQty=(id)=>{
    setCart((prev)=>
    prev.map((c)=>c.id===id
  ?{...c,qty:c.qty-1}:c).filter((c)=>c.qty>0))

  }
  // cart empty karne ke liye
  const clearCart=()=>{
    if(confirm("Are you sure?"))
  {

  localStorage.removeItem("cart")
  setCart([]);
}
  }
  const clearOrder=()=>{
    if(confirm("Are you want to clear order history?"))
  {

  localStorage.removeItem("orders")
  setOrders([]);
}
  }
  
        


      return (
   <>
   
   <Navbar search={search} setSearch={setSearch} cart={cart} setCart={setCart} user={user} setUser={setUser} 
     />
      <h1 className='my-4 text-center text-green-600 text-4xl font-bold '>
        This is  Greenworld
      </h1>
      <Routes>
   <Route path="/" element={<Card data={filterProduct} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
       <Route path="/fruit" element={<Fruits data={fruitData}  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
      <Route path="/vegitable" element={<Vegitables data={vegitableData} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
         <Route path="/login" element={<LogIn isLogin={isLogin} setUser={setUser} setIsLogin={setIsLogin}/> }/>
      
      <Route element={<ProtectRoute isLogin={isLogin}/>}>

       <Route path="/cart" element={<Cart user={user} cart={cart} removeFromCart={removeFromCart}   increaseQty={increaseQty} decreaseQty={decreaseQty} clearCart={clearCart}  />}/>
<Route path='/checkOut' element={<Checkout user={user} cart={cart}  setCart={setCart} orders={orders} setOrder={setOrders}
/> }/>
       <Route path="/success" element={<OrderSuccess setOrderPlace={setOrderPlace} />}/>

      <Route path="/orders" element={<OrderHistoryPage orders={orders} setOrders={setOrders} clearOrder={clearOrder}/>}/>
</Route>
         </Routes> 
    </>
  )
}

export default App
