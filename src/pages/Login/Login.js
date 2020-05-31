import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import puma from '../../assets/puma-logo.svg'
import { FiLogIn } from 'react-icons/fi'

export default function Login() {
    return (
        <div className="login-container">
            <form >
                <img src={puma} alt="monzo" />
                <input 
                placeholder="E-mail Adress"
                />
                <input 
                type="password"
                placeholder="Password"
                />

                <Link to="/shop">
                    <button type="submit">Entrar</button>
                </Link>
                
                <Link to="/register">
                    <FiLogIn size={16} color="#000" />
                    Don't have an Account
                </Link>
            </form>
        </div>
    );
}