import nodemailer from 'nodemailer';
import HandleBars from 'nodemailer-express-handlebars';
import path from 'path';
/*
 * Send email to user
 */
const sendEmail = async (name, email, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        transporter.use('compile', HandleBars({
            viewEngine: {
                name: 'express-handlebars',
                defaultLayout: false
            },
            viewPath: path.resolve('src', 'resources', 'emails')
        }));

        const mailOptions = {
            from: 'william.kamuyu@gapstack.com',
            to: 'william.kamuyu@gapstack.com',
            subject: 'New Message',
            template: 'test',
            context: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('error sending mail', error);
            }
        });
    } catch (e) {
        console.log(e);
    }

}

export { sendEmail };