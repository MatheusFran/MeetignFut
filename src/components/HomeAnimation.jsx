import React from "react";
import Lottie from 'lottie-react'
import home_animation from '../assets/home-animation.json'
import '../App.css'

export const HomeAnimation = (props) => {
    return (
        <div onClick={props.onClick} style={{cursor:'pointer'}}>
            <Lottie className="logocalendar" animationData={home_animation} />
        </div>
    )
}