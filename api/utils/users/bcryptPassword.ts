import bcrypt from 'bcrypt';

export const bcryptPassword = async password => {
    return await bcrypt.hash(password, 10)
};

export const comparePassword = async (loginPassword, userPassword) => {
    return await bcrypt.compare(loginPassword, userPassword)
};
