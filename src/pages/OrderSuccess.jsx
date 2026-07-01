import React from 'react'
import { FaK } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

function Orderplace({setOrderPlace}) {
  const navigate=useNavigate()
  return (
    <div className='gap-6 h-screen flex flex-col justify-center items-center '>
        <h1 className='text-6xl text-green-500 font-bold mt-4 '>Your order place successfully</h1>
        <p className='text-xl '>Thank You for shopping with us  ❤️</p>
    
    {setTimeout(()=>{
        setOrderPlace(false)
},3000)}
     
    <button setOrderPlace={false} onClick={()=>{
      navigate('/')
    }}
        className='text-white bg-green-600 px-6 py-2 rounded mt-6'>Back to Home
      </button>
      </div>
  )
}

export default Orderplace