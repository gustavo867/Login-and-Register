import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react-web'

import './Shop.css'

import workingAnimation from '../../assets/8216-working-room.json'

export default function Shop() {
    return (
        <div className="container">
            <h1>Working on Shop 👷‍♂️</h1>
        <Lottie
        width={900}
        height={900}
        renderer= "svg"
        options={{
            loop: true,
            autoplay: true, 
            animationData: workingAnimation
            }}
        />
        </div> 
    )
}