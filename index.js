const express = require('express')
const app = express()
require('dotenv').config()


app.listen(process.env.PORT, () => {
    console.log(`Sef-whatsapp app listening on port ${process.env.PORT}`)
})

app.get("/webhook", (req, res) => {
    const verify_token = process.env.WP_VERIFY_TOKEN;
    // Parse params from the webhook verification request
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    if (mode && token)
        if (mode === "subscribe" && token === process.env.WP_VERIFY_TOKEN) res.status(200).send(challenge)
        else res.status(403)
})

app.get("/test", (req, res) => {
    console.log("Test succeed")
    res.status(200).json({test:"succeed"})
})