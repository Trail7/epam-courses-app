import React from 'react';
import { LOGO, LOGO_ALT_TEXT } from '../../../../constants';

export const Logo = () => (
	<img
		src={LOGO}
		alt={LOGO_ALT_TEXT}
		style={{ width: '70px', aspectRatio: 'auto' }}
	/>
);
