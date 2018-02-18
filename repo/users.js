import knex from './config';
import randomstring from 'randomstring';
import * as bcryptHelpers from '../authHelpers/bcryptHelpers';

async function createUser(user) {
    let hashed = await bcryptHelpers.hasPassword(user.password);
    user.verified = false;
    user.password = hashed;
    user.tempToken = randomstring.generate();
    await knex('users').insert(user);
    return user;
}

export {
    createUser
}