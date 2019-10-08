import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <h2 tabindex='0'>Inicia sesión</h2>
      <form action='' className='login__container--form'>
        <input
          aria-label='Correo'
          className='input'
          type='text'
          name=''
          id=''
          placeholder='Correo'
        />
        <input
          aria-label='password'
          className='input'
          type='password'
          name=''
          id=''
          placeholder='Contraseña'
        />
        <button className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' name='' id='cbox1' value='checkbox' />
            Recuerdame
          </label>
          <a href='#'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Twiter' />
          Inivia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta <a href='#'>Registrate</a>
      </p>
    </div>
  </section>
);

export default Login;
