import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import fs from 'fs'
import { promisify } from 'util'
import hbs from 'handlebars';
import juice from 'juice';
import path from 'path';

const readFileAsync = promisify(fs.readFile);

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
            pass: password,
        },
    });
    
    try {
        const templatePath = path.join(__dirname + '../../../../app/index.html');
        console.log(templatePath);
        
        
        // const htmlTemplate = await readFileAsync('index.html', 'utf-8');
        // const template = hbs.compile(htmlTemplate);

        // const htmlWithNoStyles = template({ name, phone, message })
        // const html = juice(htmlWithNoStyles);

        // const mail = await transporter.sendMail({
        //     from: username,
        //     to: "hung.work1401@gmail.com",
        //     replyTo: username,
        //     subject: `Có thằng nào hỏi kìa`,
        //     html,
        // });

        return NextResponse.json({
            status: 200,
            message: "Success: email was sent",
            templatePath: templatePath
        });
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            status: 400,
            message: "COULD NOT SEND MESSAGE",
        });
    }
}
