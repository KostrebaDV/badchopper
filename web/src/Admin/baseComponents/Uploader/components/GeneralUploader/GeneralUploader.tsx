import React from 'react';
import PropTypes from 'prop-types';

import Uploader from '../Uploader/Uploader';
import GeneralUploaderContent from './GeneralUploaderContent';

const GeneralUploader = (
	{
		id,
		url,
		name,
        unMount,
		multiple
	}
) => {
	return (
		<Uploader
			id={id}
			url={url}
			name={name}
            unMount={unMount}
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
    unMount: PropTypes.bool,
	url: PropTypes.string,
	multiple: PropTypes.number,
	name: PropTypes.string.isRequired,
};

export { GeneralUploader };
