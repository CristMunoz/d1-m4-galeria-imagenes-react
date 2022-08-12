import React from 'react'
import { Button } from 'react-bootstrap'

const Card = ({image, title, description}) => {
  return (
    <div className="card">
        <img src={image} className="card-img-top" alt=".." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <hr />
          <p className="card-text text-center">
            {description}
          </p>
          <Button className='btn btn-success' href='#'>Más información</Button>
        </div>
    </div>
  )
}

export default Card