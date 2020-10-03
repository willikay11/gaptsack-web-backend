import Message from './message.model';
import { sendEmail } from '../../utils/sendEmail';

/*
 * Create a user
 */
export const storeContactUsMessage = async (req, res) => {
    try {
        console.log(process.env.DB_HOST, process.env.NODE_ENV)
        const { name, email, subject, message } = req.body;
        const newMessage = await Message.create({
                name: name,
                email: email,
                subject: subject,
                message: message
            });

        // Send user a verification emil
        await sendEmail(name, email, subject, message);

        return res.status(201).send({
            success: true,
            message: 'Message received successfully'
        });
    } catch (error) {
        console.log(error);
        switch (error.name) {
            case 'SequelizeValidationError':
                return res.status(400).send({
                    success: 'false',
                    message: 'Validation failed!',
                    errors: error.errors.map(err => (
                        {
                            message: err.message
                        }
                    ))
                });
            default:
                return res.status(500).end();
        }
    }
}