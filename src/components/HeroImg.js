import './HeroImgStyles.css';

import React from 'react'

import IntroImg from '../assets/intro.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className='content'>
            
            <h1>Decoração Fina</h1>
            <p>Decoração de festas e mesas. Mesa posta, arranjos florais, jantares, festas, mini eventos. Consultoria, personalização e material. Será um prazer!</p>
        
            <div>
                <Link to={'/flores'}className='btn btn-light'>Flores</Link>
                <Link to={'/presentes'}className='btn btn-light'>Presentes</Link>
                <Link to={'/contato'}className='btn btn-light'>Contato</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg