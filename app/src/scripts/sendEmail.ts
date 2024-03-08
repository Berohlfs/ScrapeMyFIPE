// Libs
import nodemailer from 'nodemailer'
import dayjs from 'dayjs'

type SendMethodProps = { 
    to: string,
    subject: string,
    text: string,
    html?: string
}

class Mailer{
    transporter
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
            debug: true
        })
    }

    send({ to, subject, text, html }: SendMethodProps) {
        return this.transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            html
        })
    }
}

const mailer = new Mailer()

export const sendEmail = async(fipe: string)=> {
    try{
        console.log('\n\n================================ STEP 02: Sending e-mail.')
        console.log('Sending...')
        await mailer.send({
            to: 'berohlfs@gmail.com',
            subject: 'FIPE',
            text: fipe,
            html: `
            <div style='padding: 10px; background-color: #4a8'>
                <h1 style='font-family: arial; color: white; text-align: center'>
                    Placa FIPE
                </h1>
            </div>
            <div style='margin: 30px;'>
                <p style='font-family: arial; text-align: center; max-width: 240px; margin: 0 auto'>
                    A FIPE do veículo <em>Volkswagen Gol 1.0 (G4) (Flex) 2p 2010</em> hoje (${dayjs().format('DD/MM/YYYY')}) é:
                </p>
                <h2 style='font-family: arial; text-align: center'>
                    ${Number(fipe).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </h2>
            </div>`
        })
        console.log('E-mail sent!')
    }catch(error){
        console.error(error)
        throw Error('Failed to send e-mail.')
    }
}




        