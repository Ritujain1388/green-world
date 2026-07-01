import React from 'react'

function OrderHistoryPage({orders,clearOrder}) {
    
    console.log("Orders data:", orders);
  return (
    <div className='p-6'>
        <h1 className='text-3xl font-bold mb-4 '>Your orders</h1>
        {orders?.length===0 ?
         (
            <p>No orders yet</p>)
            :
        (orders.map((order)=>
        (
            <div key={order.id} className='border p-4 mb-4 rounded'>
                <p>order id:{order.id}</p>
                <p>Date:{order.date} </p>
                {
                    order.items.map((item)=>(
                       
                        <p key={item.id}>{item.name} x {item.qty}</p>
                        
                    ))
                }
                         <p className='text-xl font-bold mt-2 '>Total:{order.total}</p>
                          <p>payment:{order.paymentMethod}</p>
            
            </div>

        )))}
        <button disabled={orders.length===0} onClick={clearOrder} className={`text-white  ${orders.length===0 ? "bg-gray-300 cursor-not-allowed":"bg-pink-400 "} py-2 px-2 rounded`}>Clear history</button>
    
    </div>
  )
}

export default OrderHistoryPage