import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LogIn({setUser,isLogin,setIsLogin}) {
  const navigate=useNavigate();
    const[name,setName]=useState("")
  const handleLogin=()=>{
    if(!name){
      alert("Please fill all the details")
    return;
    }
    const userData={name}
    console.log(name,"login clicked");
    setUser(userData);
    setIsLogin(true);


    navigate('/cart')

  

  }
    return (
    <div className=' bg-gray-200 min-h-screen  p-6 flex justify-center items-center '>
      <div className='rounded-lg shadoe-lg w-full h-full max-w-md mx-auto flex flex-col space-y-4 items-center bg-white p-4 '>
        <h1 className='text-3xl  mb-4 font-bold text-blue-600 items-center'>LogIn Form</h1>
        <input type="text"
        className='border px-2 py-3 '
        value={name}
        placeholder='Enter your name'
        onChange={(e)=>setName(e.target.value)} />
   {!isLogin?   
(<button onClick={handleLogin} className='text-white bg-blue-800 px-6 py-2  rounded'>LogIn</button>)
    :(<button className='text-white bg-blue-800 px-6 py-2 rounded' >SignUp</button>)
  }
    </div>
    </div>
  )
}

export default LogIn