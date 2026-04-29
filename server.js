import express from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from "morgan";
import cors from 'cors'

import helmet from "helmet";
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// db
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js"
import jobsRouter from "./routes/jobsRoutes.js"

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from './middleware/auth.js'

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

// ✅ CORS first — allows frontend to call backend
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

// Routes
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the API' })
})

app.get('/api/v1', (req, res) => {
    res.json({ msg: 'API' })
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

// Error handlers
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`server is listening on port ${port}`))
    } catch(error) {
        console.log(error)
    }
}

// Local dev
if(process.env.NODE_ENV !== 'production') {
    start()
} else {
    // Production (Vercel) — just connect DB, no listen
    connectDB(process.env.MONGO_URL)
}

// ✅ Vercel needs this export
export default app