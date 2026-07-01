import React, { useEffect,useState } from 'react'

function Banner() {
  const[index,setIndex]=useState(0);
  const images = [
  "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjBhbmQlMjB2ZWdldGFibGVzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBhbmQlMjB2ZWdldGFibGVzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1708971732799-649f5526ad73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZydWl0JTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
];
useEffect(() => {
  const interval=setInterval(() => {
    setIndex((prev)=>(prev+1)% images.length)
  },3000);
 return ()=>clearInterval(interval) 
},[]);

  return (
    <div className=' relative w-full h-[350px] bg-cover bg-center '
    style={{backgroundImage:`url(${images[index]})`}}>
      {/* overlay */}
      <div className='absolute inset-0 bg-black/10 '> </div>
      <div className='absolute top-1/2 px-4 z-10 w-full flex justify-between '>
      <button className= 'rounded-lg  text-white px-3 py-2 text-2xl' onClick={()=>setIndex((index+1)%images.length)}>⬅️</button>
      <button className= 'rounded-lg  text-white px-3 py-2 text-2xl' onClick={()=>setIndex((index-1+images.length)%images.length)}> ➡️</button>

      
      </div>
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-10">
  {images.map((_, i) => (
    <span
      key={i}
      onClick={() => setIndex(i)}
      className={`h-3 w-3 rounded-full cursor-pointer ${
        i === index ? "bg-white" : "bg-gray-400"
      }`}
    ></span>
  ))}
</div>
<div className="relative">

  {/* Buttons */}

  {/* 👇 Dots yaha */}
  <div className="absolute bottom-6 w-full flex justify-center gap-2 z-10">
    ...
  </div>

  {/* Gradient */}
</div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </div>
  )
}

export default Banner