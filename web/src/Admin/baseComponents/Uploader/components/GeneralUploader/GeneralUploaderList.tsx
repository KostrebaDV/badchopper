import React from 'react';
import PropTypes from 'prop-types';

import GeneralUploaderItem from './GeneralUploaderItem';

import { getFileName, getUniqueKey, getFileExtension } from '../../../../../utils';

const GeneralUploaderList = (
	{
		files,
		handleChangeFileName,
		handleRemoveFile
	}
) => {
	return files.map((file, index) => {
			const key = getUniqueKey(file.lastModified, index);

			return (
				<GeneralUploaderItem
					key={key}
					index={index}
					name={getFileName(file.name)}
					handleRemoveFile={handleRemoveFile}
					extension={getFileExtension(file.name)}
					handleChangeFileName={handleChangeFileName}
				/>
			);
		});
};

GeneralUploaderList.propTypes = {
	files: PropTypes.array,
	handleRemoveFile: PropTypes.func,
	handleChangeFileName: PropTypes.func
};

export default GeneralUploaderList;
