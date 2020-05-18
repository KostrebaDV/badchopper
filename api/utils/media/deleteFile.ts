const fs = require('fs');

export const deleteFile = (path) => {
    return new Promise((resolve, rejects) => {
        try {
            fs.unlinkSync(path);
            resolve();
        } catch(err) {
            rejects()
        }
    })
};
