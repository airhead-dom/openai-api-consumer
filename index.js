import * as dotenv from 'dotenv';
dotenv.config()

import express from 'express'
import route from './api/route.js'

const app = express();

app.use(express.json())

// routes
app.get('/api/hello', (req, res, next) => {
    res.json({ message: 'Hello World' })
})
app.use('/api', route)

const PORT = 5005;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
}) 