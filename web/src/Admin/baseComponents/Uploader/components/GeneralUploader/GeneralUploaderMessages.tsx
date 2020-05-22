import React from 'react';
import PropTypes from 'prop-types';

import { DangerMessage } from '../../../Message/Message';

const GeneralUploaderMessages = (
	{
		showNoFilesMessage
	}
) => {
	return (
		<>
			{
				showNoFilesMessage && (
					<DangerMessage
						title="!!Нет выбраных файлов"
					/>
				)

			}
		</>
	);
};

GeneralUploaderMessages.propTypes = {
	showNoFilesMessage: PropTypes.bool
};

export default GeneralUploaderMessages;
