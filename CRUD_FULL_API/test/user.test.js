const app = require('../app');
const supetest = require('supertest');
const request = supetest(app);

describe('Test cases for user registration', ()=> {
    it('Testing user with invalid email id or name  or password', async()=> {
        const res = await request.post("/api/v1/users/register").send({
            email:"abc@gmail.com",
            
        });
        console.log("Res", res.body[0]);
        expect(res.statusCode).toBe(400);
        expect(res.body[0].msg).toEqual("Bad request");
    })

    it("This will fail",()=> {
        expect(true).toEqual(true);
    })
})