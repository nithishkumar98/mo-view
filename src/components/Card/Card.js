import React from 'react'
import './Card.css'
const Card = (props) => {
    console.log("props");
    console.log(props)
  return (
    <div>
        <div className='card-wrapper'>
        <div className='card flex justify-center flex-col text-align-center'>
                <img className='poster-image ' src={props.baseURL +'/t/p/w220_and_h330_face'+ props.poster} />
                <h1 className='title p-2 text-xs font-bold'>{props.title}</h1>
                <h1>{props.orignalTitle}</h1>
        </div>
        </div>
    </div>
  )
}

export default Card