import { Request, Response } from "express"

function transactions () {
    
    function getBalance(req: Request, res: Response):void {
        const balance = {"amount": 0}
        res.json(balance)
    }

    function getTransaction(req: Request, res: Response):void{

        const transactions = [
            {
              "id": "string",
              "user_id": "string",
              "amount": 0,
              "type": req.query.type
            }
          ]
        res.json(transactions)
    }
    function postTransaction(req: Request, res: Response):void{
        const { body } = req
        console.log(body)
        if (body.hasOwnProperty('user_id')){
            res.json({
                "id": "string",
                "user_id": "string",
                "amount": 0,
                "type": "CREDIT"
            })
        }
    }

    return {
        getBalance,
        getTransaction,
        postTransaction
    }
}

export default transactions