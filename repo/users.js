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

async function verifyUser(tempToken) {
    let user = await knex('users').where({ tempToken: tempToken }).first();
    if (user) {
        user.verified = true;
        user.tempToken = '';
        await knex('users').update(user);
        return knex('users').where({id: user.id}).first();
    }
}

export {
    createUser,
    verifyUser
}