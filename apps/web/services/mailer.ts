import nodemailer from "nodemailer";

type EmailData = {
    name: string;
    email: string;
};

export const sendApplicationConfirmation = async (data: EmailData) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOSTNAME,
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_EXHIBITOR_USERNAME,
            pass: process.env.MAIL_EXHIBITOR_PASSWORD,
        },
        ignoreTLS: true,
        requireTLS: false,
        from: process.env.MAIL_EXHIBITOR_USERNAME,
    });

    const info = await transporter.sendMail({
        from: `${process.env.MAIL_EXHIBITOR_USERNAME}`,
        to: data.email,
        subject: "Application received - Book Fair Australia",
        text: `Hi ${data.name}, \n\nYour application has been received. We will inform you of your application status via email. \n\nThank you, \nBook Fair Australia`,
    });

    console.log("Message sent: %s", info.response);
    return true;
};

export const sendRegisterConfirmation = async (data: EmailData) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOSTNAME,
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_ADMIN_USERNAME,
            pass: process.env.MAIL_ADMIN_PASSWORD,
        },
        ignoreTLS: true,
        requireTLS: false,
        from: process.env.MAIL_ADMIN_USERNAME,
    });

    const info = await transporter.sendMail({
        from: `${process.env.MAIL_ADMIN_USERNAME}`,
        to: data.email,
        subject: "Registration received - Book Fair Australia",
        text: `Hi ${data.name}, \n\nYour registration has been received. \n\nThank you, \nBook Fair Australia`,
    });

    console.log("Message sent: %s", info.response);
    return true;
};
