import bcrypt from 'bcrypt';

function hasPassword(password) {
    return bcrypt.hash(password, 10);
}

function comparePassword(password, hash) {
    return bcrypt.compare(password, hash);
}

export {
    hasPassword,
    comparePassword
}