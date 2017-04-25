'use strict'

const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer')

router.post('/send', (req, res) => {

    const data = req.body

    const destinatario = data.destinatario
    const assunto = data.assunto
    const mensagem = data.mensagem

    const trp = nodemailer.createTransport({
        host: 'mail.ita.locaweb.com.br',
        port: '587',
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: 'guilherme.catini@iv2.com.br',
            pass: '@Ggcr2305'
        }
    })

    var email = {
        from: 'guilherme.catini@iv2.com.br', // Quem enviou este e-mail
        to: destinatario, // Quem receberá
        subject: assunto,  // Um assunto bacana :-) 
        html: mensagem // O conteúdo do e-mail
    }

    trp.sendMail(email, (err, data) => {
        if (err) return res.json(err, 500)
            return res.json(data, 200)
    })


})

module.exports = router;
