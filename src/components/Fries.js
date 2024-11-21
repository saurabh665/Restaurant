import React from 'react'

const Fries = ({title,image,description,price}) => {
  return (
    <div className="flex items-center border rounded shadow-lg p-4 mb-4">
    <div className="flex-1">

    <h2 className='text-base font-bold'>{title}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
    <h3 className="text-gray-600 mt-2">{price}</h3>
    </div>
    <div className="w-28 h-28 object-cover rounded-lg ml-4" >
    <img src={image} alt={title}/>
    </div>
    </div>
  )
}

export default Fries