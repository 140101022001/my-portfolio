import { NextResponse, NextRequest } from 'next/server'
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

    const body = await request.json();
    const { name, phone, message } = body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            rejectUnauthorized: false,
        },

        auth: {
            user: username,
            pass: password
        }
    });
    

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: 'hung.work1401@gmail.com',
            replyTo: username,
            subject: `Có th hỏi kìa`,
            html: `
            <p>Name: ${name} </p>
            <p>Phone: ${phone} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({
            status: 200,
            message: "Success: email was sent" 
        })

    } catch (error) {
        return NextResponse.json({
            status: 400,
            message: "COULD NOT SEND MESSAGE" 
        })
    }
  }