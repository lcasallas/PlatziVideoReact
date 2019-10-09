import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {
	const [form, setValues] = useState({
		email: '',
	});

	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		props.loginRequest(form);
		props.history.push('/');
	};

	return (
		<section className='login'>
			<div className='login__container'>
				<h2 tabindex='0'>Inicia sesión</h2>
				<form
					action=''
					className='login__container--form'
					onSubmit={handleSubmit}
				>
					<input
						aria-label='Correo'
						className='input'
						type='text'
						name='email'
						placeholder='Correo'
						onChange={handleInput}
					/>
					<input
						aria-label='password'
						className='input'
						type='password'
						name='password'
						placeholder='Contraseña'
						onChange={handleInput}
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
					No tienes ninguna cuenta <Link to='/register'>Registrate</Link>
				</p>
			</div>
		</section>
	);
};

const mapDispatchToProps = {
	loginRequest,
};

export default connect(
	null,
	mapDispatchToProps
)(Login);
