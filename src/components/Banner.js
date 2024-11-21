import React from 'react'

const Banner = ({title,desciotionn,image,button}) => {
  return (
    <div className='flex item-center justfy-content  bg-gray-50 rounded-lg shadow-mg'>
    <div flex-1>
    <h2 className='text-3xl font-bold text-gray-50 mb-4'>{title}</h2>
    <p className='text-grey-600 mb-6'>{desciotionn}</p>

    </div>
    <div className='flex-1'>
    <img className="w-full h-auto rounded-lg shadow-md"src={image} alt={title}/>
    </div>
 
    </div>
  )
}

export default Banner