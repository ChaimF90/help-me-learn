import express from 'express-promise-router';
const router = express();
import * as db from '../repo';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID);
import jwt from 'jsonwebtoken';

router.post('/', async (req, res) => {
    const user = await db.users.createUser(req.body);
    const msg = {
        to: user.email,
        from: process.env.FROM_EMAIL,
        subject: 'Please verify your email',
        html: `<a href=${process.env.VERIFY_LINK}/${user.tempToken}>Click to verify your account</a>`
    };
    await sgMail.send(msg);
    res.status(200).json({ success: true });
});

router.post('/verify', async (req, res) => {
    const user = await db.users.verifyUser(req.body.tempToken);
    if (user) {
        const token = jwt.sign({ userId: user.id }, process.env.AUTH_SECRET, {
            expiresIn: 60 * 60 * 24
        });
        res.status(200).json({
            success: true,
            token
        });
    } else {
        res.status(401).json({ success: false });
    }
});

export default router;
