import express from 'express-promise-router';
const router = express();

import auth from './auth';

router.use('/users', auth);

export default router;