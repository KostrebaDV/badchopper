import React from 'react';
import PropTypes from 'prop-types';

import Uploader from '../Uploader/Uploader';
import GeneralUploaderContent from './GeneralUploaderContent';

const GeneralUploader = (
	{
		id,
		url,
		name,
		multiple
	}
) => {
	return (
		<Uploader
			id={id}
			url={url}
			name={name}
			multiple={multiple}
			render={renderData => (
					<GeneralUploaderContent
						{...renderData}
						multiple={multiple}
					/>
				)
			}
		/>
	);
};

GeneralUploader.defaultProps = {
	multiple: 25
};

GeneralUploader.propTypes = {
	id: PropTypes.number,
	url: PropTypes.string,
	multiple: PropTypes.number,
	name: PropTypes.string.isRequired,
};

export { GeneralUploader };
