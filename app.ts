import express, { Request, Response } from "express"
import cors from "cors"
import { Router } from "express"
const app = express()

app.use(cors({
origin:["http://localhost:3000","http://localhost"],
methods:["GET","POST"],
credentials:true,
preflightContinue:true
}))
app.use(express.json())
const route=Router()
route.post('/',(req:Request,res:Response)=>{
    console.log(req.body)
})
app.listen(8080,()=>console.log("connected"))