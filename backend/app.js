import express from 'express'
import cors from 'cors'
import routes from './routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(routes)

app.listen(3000,()=>{
    console.log("Api no ar!");
})