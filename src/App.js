import React from "react";
import './index.css';
import Home from './routes/Home';
import Eventos from './routes/Presentes';
import Flores from './routes/Flores';
import Contato from './routes/Contato';
import {FaWhatsapp} from 'react-icons/fa';


import { Route, Routes } from "react-router-dom";
import Presentes from "./routes/Presentes";





function App(){
    return(
        <>

            <a className="whats-link" href='https://wa.me/5511960814261/'> <FaWhatsapp className="fa-whats"
                size={40} 
                /></a>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flores" element={<Flores />} />
                <Route path="/presentes" element={<Presentes />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            a 
            
        
        </>
    );
}

export default App;