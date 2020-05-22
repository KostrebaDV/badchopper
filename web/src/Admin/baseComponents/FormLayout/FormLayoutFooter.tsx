import React from 'react';
import PropTypes from 'prop-types';

import { PaddingBox } from '../PaddingBox/PaddingBox';
import classes from './styles/index.module.scss';

const FormLayoutFooter = ({ children }) => {
	return (
        //@ts-ignore
		<PaddingBox
			vrTiny
			hrSmall
			className={classes.formLayoutFooter}
		>
			{ children }
		</PaddingBox>
	);
};

FormLayoutFooter.propTypes = {
	children: PropTypes.object
};

export { FormLayoutFooter };
