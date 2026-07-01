import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart ,setCart,setOrderPlace,orders,setOrders}) {
  const[name,setName]=useState("")
  const navigate=useNavigate();
 const[paymentMethod,setPaymentMethod]=useState("COD"); 

  const[address,setAddress]=useState('')
  const totalPrice=cart.reduce((sum,item)=>sum=sum+item.price*item.qty,0);
  
  const handleOrder=()=>{
 if(!name || !address)
 {
  alert("Please fill all details")
  return;
 }
 alert("Order place successfully")
 localStorage.removeItem("cart");
 setCart([]);
 navigate('/success')

setOrderPlace(true);

  

const newOrder={
id:Date.now()+ Math.random(),
items:cart,
total: totalPrice,
paymentMethod,
date:new Date().toLocaleString()
};
const updatedOrders=[...( orders || []),newOrder]
  localStorage.setItem("orders",JSON.stringify(updatedOrders))
  setOrders(updatedOrders)
}
return (
  <>
    <div className="max-w-3xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center">checkout</h1>
      {/* user info */}
      <div className="flex flex-col">
        <input type="text" 
        className="border p-4 rounded"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        <textarea 
        placeholder="Enter your address"
        className="border p-2 rounded"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}></textarea>
      </div>
      {/* cart summary */}
      <div className="mt-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between my-2">
            <p>
              {item.name} x {item.qty}
            </p>
            <p>₹{item.price * item.qty}</p>
          </div>
        ))}
        
        {/* payment options */}
        <div>
          <h2 className=" border-t-2 text-xl font-bold mb-2 ">Select Payment Method</h2>
          <label className="flex items-cener gap-2 mt-2 ">
            <input type="radio" 
            value="COD"
            checked={paymentMethod==="COD"}
            onChange={(e)=>setPaymentMethod(e.target.value)}/>
            Cash On Delivery(COD)
          </label>
          <label className="flex items-cener gap-2 mt-2 ">
            <input type="radio" 
            value="UPI"
            checked={paymentMethod==="UPI"}
            onChange={(e)=>setPaymentMethod(e.target.value)}/>
           UPI Payment
          </label>
          

        </div>
        <div className=" border-t-2 text-xl my-4 font-bold">
         Total: ₹ { totalPrice}
        </div>
        {/* button */}
        <button 
        onClick={handleOrder}
        className="w-full text-white bg-blue-800 px-4 py-1 rounded">Place Order 💳</button>
      </div>
    </div>
    </>
  );
}

export default Checkout;
