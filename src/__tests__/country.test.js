const app = require("../index")
const request = require("supertest")

describe("country api", () => {
    it("should get a valid country by name mode", async (done) => {
        const res = await request(app)
    .get("/country/name/nigeria")
    const { country, status, message } = res.body.data
    expect(res.statusCode).toBe(200)
    expect(status).toBe("ok")
    expect(country.name).toBe("Nigeria")
    expect(country.phone).toBe('234')
    expect(country.capital).toBe('Abuja')
    done()
    })
    

})