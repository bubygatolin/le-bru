import './FormStyles.css';

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Seu Nome</label>
            <input type='text'></input>

            <label>Email</label>
            <input type='email'></input>

            <label>Assunto</label>
            <input type='text'></input>

            <label>Menssagem</label>
            <textarea rows= '6' placeholder='Digite sua menssagem aqui..'/>
            <button className='btn'>Enviar</button>
        </form>
    </div>
  )
}

export default Form