import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cart({user,cart,removeFromCart,increaseQty,decreaseQty,clearCart,setShowCheckout}) {
  const totalPrice=cart.reduce((total,item)=>total+item.price*item.qty,0)
  const navigate=useNavigate();
  return (
    <div className='relative bg-gray-800 w-full '>
    <button className=' text-xl absolute right-10 top-0'
   
    onClick={()=>{
      navigate('/')
    }}> ❌</button>
    <div className=' absolute left-10 top-0 w-66.25 h-full p-2 '>
   
   {cart.length===0 ? (<p className='text-center text-green-500 text-3xl font-bold'>Your Cart is empty</p>
  ):
   (     
      <>
      <h1 className='w-full text-center text-3xl font-bold border-b pb-8 mb-4 '>Shopping Cart</h1>
      { cart.map((item)=>{
        return(
          <div key={item.id} className='  flex items-center gap-4'>
            <img  className=" rounded-xl object-cover h-40"src={item.image} alt="image" />
            <div className='flex flex-col gap-2'> 
            <p className='text-2xl font-bold'>{item.name}</p>
            <p className='text-xl font-semibold'>{item.price}</p>
</div>
<div className='bg-green-900 rounded-lg flex justify-center items-center '>
<button 
className='  bg-green-200 mx-4 text-black  text-2xl px-2 py-1'
onClick={()=>increaseQty(item.id)}>+</button>
<span className='text-white'>{item.qty}</span>
<button onClick={()=>decreaseQty(item.id)}
className='bg-green-200 mx-4  text-black text-2xl px-2 py-1'>-</button>

</div>
<button    
onClick={()=>removeFromCart(item.id)} 
className='bg-green-800 py-2 px-4  text-white rounded'>Remove</button>
          </div>
        )

 } )}
   
 <div className='text-2xl mt-7 font-bold'>
 Total:{totalPrice}
 </div>
 {cart.length > 0 &&(
  <button 

 onClick={()=>{
  if(!user)
 {
  alert("please login first")
  navigate('/login');
  return;
 }
  
  navigate('/checkOut')
  }}  className='mt-4 w-full bg-green-500 text-white py-2 rounded-2xl'>Proceed to checkout</button>
 
  
 )}

  <button  className='  my-8 bg-red-500 font-bold text-white w-full px-4 py-2 rounded-lg' onClick={clearCart}>clearCart</button>
 
 
  </>
)}
   
</div>
</div>
 
  )
   
}

export default Cart