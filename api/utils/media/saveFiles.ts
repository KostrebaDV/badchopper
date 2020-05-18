export const saveFiles = (pathToUpload, files) => {
    return new Promise((resolve, reject) => {
        if (files.length !== 0) {
            const filesDTO = [];

            files.forEach(file => {
                file.mv(`${pathToUpload}/${file.name}`, (err) => {
                    if (err) {
                        throw new Error('No files were uploaded')
                    }
                });

                const name = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;

                filesDTO.push({
                    name,
                    path: `${pathToUpload}/${file.name}`,
                    extension: file.name.split('.').pop()
                })
            });

            resolve(filesDTO);
        } else {
            reject("no files to upload")
        }
    });
};
