import supertest from "supertest";
import app from '@src/app'


describe('Doing transactions functional tests: ',  () => {
    // @ts-ignore
    it('shoud return a balance of all trasactions', async()=>{
        const {status, body} = await supertest(app).get('/balance')
        expect(status).toBe(200)
        expect(body).toStrictEqual({
            amount: 0
        })
    })

    it('shoud return a transactions list with CREDIT operactions:', async () => {
        const {status, body} = await supertest(app).get('/transactions?type=CREDIT')
        expect(status).toBe(200)
        expect(body).toStrictEqual([
            {
              "id": "string",
              "user_id": "string",
              "amount": 0,
              "type": "CREDIT"
            }
          ])
    })

    it('shoud return a transactions list with DEBIT operactions:', async () => {
        const {status, body} = await supertest(app).get('/transactions?type=DEBIT')
        expect(status).toBe(200)
        expect(body).toStrictEqual([
            {
              "id": "string",
              "user_id": "string",
              "amount": 0,
              "type": "DEBIT"
            }
          ])
    })

    it('shoud create a transactions with CREDIT operactions:', async () => {
        const fakeTransaction = {
            "user_id": "string",
            "amount": 0,
            "type": "CREDIT"
          }
        const {status, body} = await supertest(app)
            .post('/transactions')
            .send(fakeTransaction)

        expect(status).toBe(200)
        expect(body).toStrictEqual({
            "id": "string",
            "user_id": "string",
            "amount": 0,
            "type": "CREDIT"
          })
    })
})
