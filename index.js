const express = require('express')
const bodyParser = require('body-parser')
const client = require('prom-client')
const app = express()
const homeRoute = require('./routes/homeRoute')
const loginRoute = require('./routes/loginRoute')
const userRoute = require('./routes/userRoute')
const listRoute = require('./routes/listRoute')
const clubRoute = require('./routes/clubRoute')
const pageRoute = require('./routes/pageRoute')
const searchRoute = require('./routes/searchRoute')
const zoneRoute = require('./routes/zoneRoute')
const config = require('./config/config')
const { LogRequest } = require('./middleware/log')

app.use(LogRequest)


app.use(bodyParser.urlencoded({ extended: false }))
app.use('/login', loginRoute)
app.use('/home', homeRoute)
app.use('/user', userRoute)
app.use('/list', listRoute)
app.use('/club', clubRoute)
app.use('/page', pageRoute)
app.use('/search', searchRoute)
app.use('/zone', zoneRoute)


app.get('/metrics', async (req, res) => {
    res.setHeader('Content-Type', client.register.contentType)
    const metrics = await client.register.metrics()
    res.send(metrics)
})
app.listen(config.port, '0.0.0.0', () => {
    console.log(`🚀 HTTP ${config.port}`)
})