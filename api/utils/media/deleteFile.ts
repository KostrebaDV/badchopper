const fs = require('fs');
const path = require('path');
require('dotenv').config()

const PUBLIC_FOLDER_PATH = process.env.PUBLIC_FOLDER_PATH;

export const deleteFile = (imagePath) => {
    return new Promise((resolve, rejects) => {
        try {
            fs.unlinkSync(path.join(__dirname, `${PUBLIC_FOLDER_PATH}/${imagePath}`));
            resolve();
        } catch(err) {
            rejects()
        }
    })
};
