import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { errorHandeler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('api is running')
})

//routers
app.use('/api/products', productRoutes)

app.use('/api/users', userRoutes)

app.use('/api/orders', orderRoutes)

//error middlewares
app.use(notFound)
app.use(errorHandeler)

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(
    `server is running ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
)
