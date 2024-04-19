import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_ETHEREAL_HOST,
    port: process.env.NODEMAILER_ETHEREAL_PORT,
    auth: {
        user: process.env.NODEMAILER_ETHEREAL_EMAIL,
        pass: process.env.NODEMAILER_ETHEREAL_PASSWORD
    }
});

export default transporter;