import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../Button/Button';
import { PaddingBox } from '../../../PaddingBox/PaddingBox';
import GridLayout, { GridLayoutRow } from '../../../GridLayout';
import GeneralUploaderList from './GeneralUploaderList';
import GeneralUploaderMessages from './GeneralUploaderMessages';
import GeneralUploaderDragDrop from './GeneralUploaderDragDrop';

import classes from './styles/index.module.scss';

const GeneralUploaderContent = (
	{
		files,
		multiple,
		handleAddFile,
		removeAllFiles,
		handleRemoveFile,
		showNoFilesMessage,
		handleChangeFileName,
	}
) => {
	const inputRef: { current } = useRef();

	const buttonGridLayout = files.length > 1 ? '19-_1-12' : '32';

	return (
		<>
			<GeneralUploaderDragDrop
				handleAddFile={handleAddFile}
			>
				<>
					<input
						type="file"
						name="file"
						ref={inputRef}
						multiple={multiple}
						onChange={handleAddFile}
						className={classes.generalUploader_input}
					/>
					<GridLayout>
						<GridLayoutRow gridColumn={32} grid={buttonGridLayout}>
							<Button
								className={classes.generalUploader_buttons}
								label="!!добавить файлы"
								actionHandler={() => inputRef.current.click()}
							/>
							{
								files.length > 1 && (
									<Button
										className={classes.generalUploader_buttons}
										type="danger"
										label="!Удалить"
										actionHandler={removeAllFiles}
									/>
								)
							}
						</GridLayoutRow>
					</GridLayout>
				</>
			</GeneralUploaderDragDrop>
			<PaddingBox hrSmall>
				<GeneralUploaderList
					files={files}
					handleChangeFileName={handleChangeFileName}
					handleRemoveFile={handleRemoveFile}
				/>
			</PaddingBox>
			<GeneralUploaderMessages
				showNoFilesMessage={showNoFilesMessage}
			/>
		</>
	);
};

GeneralUploaderContent.defaultProps = {
	multiple: true
};

GeneralUploaderContent.propTypes = {
	files: PropTypes.array,
	multiple: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.bool
	]),
	removeAllFiles: PropTypes.func,
	showNoFilesMessage: PropTypes.bool,
	handleRemoveFile: PropTypes.func,
	handleChangeFileName: PropTypes.func
};

export default GeneralUploaderContent;
