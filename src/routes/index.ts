import express from "express";
import { Response } from "express-serve-static-core";

const Routes = express.Router()

Routes.get('/balance', (req: any, res: Response)=>{
    
    res.status(200).json()
})

export default Routes