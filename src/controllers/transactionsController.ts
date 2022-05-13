import { Request, Response } from "express"

function transactions () {
    function getBalance(req: Request, res: Response):void {
        const balance = {"amount": 0}
        res.json(balance)
    }

    function getTransaction(){}
    function postTransaction(){}

    return {
        getBalance,
        getTransaction,
        postTransaction
    }
}

export default transactions