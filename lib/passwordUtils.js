import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    }

export const comparePasswords = async (inputPassword, userPassword) => {
    return await bcrypt.compare(inputPassword, userPassword);
    };
