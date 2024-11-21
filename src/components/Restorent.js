import React from 'react'

const Restorent = ({image,title}) => {
  return (
    <div>Restorent
    <div>
    <img src={image} alt={title}/>
    </div>
    </div>
  )
}

export default Restorent