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
        // const templatePath = path.join(__dirname + '../../../../../../email/index.html');
        // console.log(templatePath);


        // const htmlTemplate = await readFileAsync('email/index.html', 'utf-8');
        const htmlTemplate = `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Co th hoi kia d m</title>
            </head>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                @media screen and (max-width: 600px) {
                .content {
                    width: 100% !important;
                    display: block !important;
                    padding: 10px !important;
                }
                .header, .body, .footer {
                    padding: 20px !important;
                }
            }
            </style>

            <body style="font-family: 'Poppins', Arial, sans-serif">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                                <!-- Header -->
                                <tr>
                                    <td class="header" style="background-color: #345C72; padding: 40px; text-align: center; color: white; font-size: 24px;">
                                    Có thằng hỏi!
                                    </td>
                                </tr>

                                <!-- Body -->
                                <tr>
                                    <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                                    Tin nhắn từ: {{ name }}! <br>
                                    Số điện thoại: {{ phone }}
                                    <br><br>
                                    Tin nhắn: {{ message }}            
                                    </td>
                                </tr>

                                <!-- Call to action Button -->
                                <tr>
                                    <td style="padding: 0px 40px 0px 40px; text-align: center;">
                                        <!-- CTA Button -->
                                        <table cellspacing="0" cellpadding="0" style="margin: auto;">
                                            <tr>
                                                <td align="center" style="background-color: #345C72; padding: 10px 20px; border-radius: 5px;">
                                                    <img src="https://lusty.asia:1443/uploads/medium_961_F5_ACC_AAC_7_48_FB_99_AE_7_B044_C0292_C6_35595f63f1.png" alt="logo">
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                                        Ok con dê!             
                                    </td>
                                </tr>
                                <!-- Footer -->
                                <tr>
                                    <td class="footer" style="background-color: #333333; padding: 40px; text-align: center; color: white; font-size: 14px;">
                                    Copyright &copy; 2024 | Hùng
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>

            </html>
        `

        const template = hbs.compile(htmlTemplate);

        const htmlWithNoStyles = template({ name, phone, message })
        const html = juice(htmlWithNoStyles);

        const mail = await transporter.sendMail({
            from: username,
            to: "hung.work1401@gmail.com",
            replyTo: username,
            subject: `Có thằng nào hỏi kìa`,
            html,
        });

        return NextResponse.json({
            status: 200,
            message: "Success: email was sent",
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            status: 400,
            message: "COULD NOT SEND MESSAGE",
        });
    }
}
