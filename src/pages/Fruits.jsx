import React from 'react'

function Fruits({data,addToCart,removeFromCart,cart}) {
  return (
    <div className='z-20 bg-green-100 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
  
      {data.map((item)=>{
      const isInCart=cart.find((c)=>c.id===item.id)
     
      return <div  
        key={item.id} 
        className='p-2 bg-white my-8 shadow-lg rounded-lg cursor-pointer hover:scale-110 transform transition-normal w-[70%]'>
            <div className='bg-cover w-full'>
            <img   className=' w-full my-4  rounded lg h-30 object-cover' src={item.image} alt="image" />
            </div>
            <p className=' pl-4 text-xl text-yellow-500'>{item.name}</p>
            <div className='font- px-4 my-3 font-bold flex justify-between'>
            <p >{item.price}/kg</p>
            <p>{item.category.fruit}</p>
            </div>
   <div className='text-center'>
   {isInCart?
   (<button onClick={(id)=>{
    console.log("remove clicked",item)
    removeFromCart(item.id)}} className= 'mb-4 text-white bg-green-800 px-4 py-2 rounded'>removeFromCart</button>
   )
  :
   (<button onClick={
    ()=>{
      console.log("clicked",item)
      addToCart(item)} }className= 'mb-4 text-white bg-green-800 px-4 py-2 rounded'>Add To Cart</button>
   )
  }

        </div>
        </div>
      })} 
       

    </div>
  )
}

export default Fruits