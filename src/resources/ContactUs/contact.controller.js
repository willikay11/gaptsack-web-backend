import SendEmail from '../../utils/sendEmail';

/*
 * Create a user
 */
export const storeContactUsMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        // const newUser = await User.create({
        //         first_name: first_name,
        //         last_name: last_name,
        //         email: email,
        //         phone: phone,
        //         activation_code: uuidv4()
        //     });

        // Send user a verification emil
        await SendEmail(name, email, subject, message);

        return res.status(201).send({
            success: true,
            message: 'Message received successully'
        });
    } catch (error) {
        switch (error.name) {
            // case 'SequelizeValidationError':
            //     return res.status(400).send({
            //         success: 'false',
            //         message: 'Validation failed!',
            //         errors: error.errors.map(err => (
            //             {
            //                 message: err.message
            //             }
            //         ))
            //     });
            // case 'SequelizeUniqueConstraintError':
            //     return res.status(400).send({
            //         success: false,
            //         message: 'Email already exists',
            //         errors: error.errors.map(err => (
            //             {
            //                 message: err.message
            //             }
            //         ))
            //     })
            default:
                return res.status(500).end();
        }
    }
}