import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
	<>
		<section class='mensaje'>
			<div class='mensaje__container'>
				<p class='mensaje__container--nroerror'>404</p>
				<p class='mensaje__container--detail'>Pagina no encontrada</p>
			</div>
		</section>
	</>
);

export default NotFound;
