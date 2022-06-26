import React from 'react';
import { Button } from '../../../../common/Button/Button';

export const AuthorItem = (props) => (
	<div className='container row' key={props.id}>
		<div className='col-md-6 d-flex align-items-center'>
			<span className='text-truncate'>{props.name}</span>
		</div>
		<div className='col-md-6 d-flex justify-content-center'>
			<Button
				id={props.id}
				onClick={props.onClick}
				buttonText={props.buttonText}
			/>
		</div>
	</div>
);
