import express from 'express-promise-router';
const router = express();
import * as db from '../repo';
import { sendEmail } from './helpers/sendgrid';

router.post('/', async (req, res) => {
    const tempToken = await db.users.createUser(req.body);
    await sendEmail(tempToken, req.body.email);
    res.status(200).json({ success: true });
});

export default router;