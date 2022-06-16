import React from "react";
import CarouselItem from './CarouselItem'
import './Carousel.css'

const Carousel = (props) => {
    let {title, items}= props
    return(
        <div className="Carousel">
            <h3>{title}</h3>
            <div className="list">
            {items.map((item, index)=>(
                <CarouselItem key={index} item={item}/>
            ))}
            </div>
        </div>
    )
}

export default Carousel