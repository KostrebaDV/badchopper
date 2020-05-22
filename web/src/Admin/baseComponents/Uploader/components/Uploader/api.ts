import { UPLOAD } from '../../../../../utils/api';

const uploadFiles = (url, data, handleUploadProgress) => {
	return UPLOAD(url, data, handleUploadProgress);
};

export {
	uploadFiles
};
