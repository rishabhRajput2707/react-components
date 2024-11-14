import React from 'react'

const Card = () => {

    const data = [
        {image :"https://images.unsplash.com/photo-1729860649117-96c2c4cbd6e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8" , name: "Amazon" , description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem praesentium deleniti explicabo, provident quo voluptas est consequatur minus non?" , instock:true},
        {image :"https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8fDA%3D" , name: "apple" , description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem praesentium deleniti explicabo, provident quo voluptas est consequatur minus non?", instock:false},
        {image :"https://images.unsplash.com/photo-1565043534447-a83eeb658a05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW55dGhpbmd8ZW58MHx8MHx8fDA%3D" , name: "anything" , description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem praesentium deleniti explicabo, provident quo voluptas est consequatur minus non?" , instock:true},
        
    ]
  return (
    <div className='h-screen w-full flex items-center justify-center gap-10 bg-zinc-300 '>
       {data.map((elem , index)=>( <div key={index} className=' w-52  bg-zinc-200 rounded-md'>
            <div className='w-full h-32 bg-zinc-300  overflow-hidden '>
                <img className='object-cover h-full w-full ' src={elem.image} alt="" />
            </div>
            <div className='py-2 px-2'>
                <h2 className=' font-semibold  py-2'>{elem.name}</h2>
                <p className='text-xs  py-1'>{elem.description}</p>
                <button className= {`px-5 py-1 ${elem.instock ? "bg-blue-600" : "bg-red-600"} rounded text-xs text-zinc-100 mt-3` }>{elem.instock ? "In Stock": "Out of Stock"}</button>
            </div>
        </div>))}
    </div>
  )
}

export default Card