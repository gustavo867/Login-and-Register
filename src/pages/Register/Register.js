import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './Register.css'
import Logo from '../../assets/logo-puma.svg'

export default function Register() {
    return (
    <div className="container">
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Puma" />

                    <Link to="/">
                        <FiArrowLeft size={16} color="#000" />
                        Back to Home
                    </Link>
                </section>

                <form>
                    <h1>Register</h1>
                    <input placeholder="Name"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Password"/>    
                    <button className="button" type="submit">Register</button>          
                </form>
            </div>
        </div>
    </div>
    );
}