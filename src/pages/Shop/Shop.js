import React  from 'react';
import Switch  from "react-switch";

import Lottie from 'lottie-react-web';
import Animation from '../../assets/8216-working-room.json';

import { Container } from  './styles.js';

import light from '../../themes/light';
import dark from '../../themes/dark';

import logo2 from '../../assets/logo-puma.svg'

export default function Shop() {
    return (
    <>
            <Container>
                <img src={logo2} alt="logo"/>
                <h3>Home</h3>
                <h3>Shop</h3>
                <h3>Shoes</h3>
                <h3>Shirts</h3>     
                <Switch
                onChange={() => {}}
                checked={light === dark}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor="#ccc"
                onColor="#B5FFE1"
                />        
            </Container> 
 
        <div className="lottie">
            <Lottie
            width={700}
            height={700}
            renderer= "svg"
            options={{
                loop: true,
                autoplay: true, 
                animationData: Animation
                }}
            />   
        </div> 
    </>     
    )
}