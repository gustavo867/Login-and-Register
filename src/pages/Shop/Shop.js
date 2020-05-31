import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import Lottie from 'lottie-react-web'

import './Shop.css'

import workingAnimation from '../../assets/8216-working-room.json'

export default function Shop() {
    return (
        <div className="container">
             <Link to="/">
                    <FiArrowLeft size={16} color="#000" />
                    Back To Home 🏠 
                </Link>

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