import React from "react";
import './CarouselItem.css'
import {GoClock} from 'react-icons/go'

let CarouselItem = (props) => {
    let item = props.item
    return (
        <div className="CarouselItem">
            <img 
                src={item.img}
                alt='Loading'
            />
            <div className='info'>
            <h3 className={item.sufficient?null:'disable'}>{item.sufficient?null:<GoClock className="clock"/>}{item.title}</h3>
            <p>{item.content}</p>
            {item.sufficient?null:<p className="insufficient">Insufficient coins</p>}
            </div>
        </div>
    )
}

export default CarouselItem