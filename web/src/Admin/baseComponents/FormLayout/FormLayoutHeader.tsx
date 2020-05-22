import React from 'react';
import PropTypes from 'prop-types';

import { PaddingBox } from '../PaddingBox/PaddingBox';
import classes from './styles/index.module.scss';

const FormLayoutHeader = ({ title, padding }) => {
	return (
		<PaddingBox
			{...padding}
			className={classes.formLayoutHeader}
		>
			{ title }
		</PaddingBox>
	);
};

FormLayoutHeader.defaultProps = {
	padding: { small: true }
};

FormLayoutHeader.propTypes = {
	title: PropTypes.string,
	padding: PropTypes.object,
};

export { FormLayoutHeader };
