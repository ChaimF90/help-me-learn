import sendgrid from 'sendgrid';

function sendEmail(tempToken, toEmail) {
    const hepler = sendgrid.mail;
    const fromEmail = new hepler.Email('chaimf21@gmail.com');
    const subject = 'Email confirmation';
    const content = new hepler.Content('text/html', `<h1>${tempToken}</h1>`);

    const sg = sendgrid(process.env.SENDGRID);
    const toMail = new hepler.Email(toEmail);
    const mail = new hepler.Mail(fromEmail, subject, toMail, content);

    const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail
    });

    return request;
}

export {
    sendEmail
}