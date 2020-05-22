import {uuidv4} from '../helpers/uuidv4';

export const saveFiles = (pathToSave, pathToFile, files) => {
    const filesToUpload = files.length !== undefined ? files : [files];

    return new Promise((resolve, reject) => {
        if (filesToUpload.length !== 0) {
            const filesDTO = [];

            filesToUpload.forEach(file => {
                const name = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;

                const hashName = `${name}___${uuidv4()}`;

                file.mv(`${pathToSave}/${hashName}`, (err) => {
                    if (err) {
                        throw new Error('No files were uploaded')
                    }
                });


                filesDTO.push({
                    name: hashName,
                    path: `${pathToFile}/${hashName}`,
                    extension: file.name.split('.').pop()
                })
            });

            resolve(filesDTO);
        } else {
            reject("no files to upload")
        }
    });
};
