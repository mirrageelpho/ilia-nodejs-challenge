import supertest from "supertest";
import app from '@src/app'


describe('Doing an amount functional test: ',  () => {
    // @ts-ignore
    it('shold return a balance of all trasactions', async()=>{
        const {status, body} = await supertest(app).get('/balance')
        expect(status).toBe(200)
        expect(body).toStrictEqual({
            amount: 0
        })
    })
})
