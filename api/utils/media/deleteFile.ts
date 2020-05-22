const fs = require('fs');

export const deleteFile = (path) => {
    return new Promise((resolve, rejects) => {
        try {
            fs.unlinkSync(`public/${path}`);
            resolve();
        } catch(err) {
            rejects()
        }
    })
};
