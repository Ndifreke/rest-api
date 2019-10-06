const app = require("../index")
const request = require("supertest")

describe("country api", () => {
    it("should get a valid country by name mode", async () => {
        const res = await request(app).get("/country/name/nigeria")
    const { country, status } = res.body.data
    expect(res.statusCode).toBe(200)
    expect(status).toBe("ok")
    expect(country.name).toBe("Nigeria")
    expect(country.phone).toBe('234')
    expect(country.capital).toBe('Abuja')
    })

    it("should get a valid country by phone mode", async () => {
        const res = await request(app).get("/country/phone/234")
    const { country, status } = res.body.data
    expect(res.statusCode).toBe(200)
    expect(status).toBe("ok")
    expect(country.name).toBe("Nigeria")
    expect(country.phone).toBe('234')
    expect(country.capital).toBe('Abuja')
    })

    it('should return 404 not found when country does not exist',  async () => {
        const res = await request(app).get("/country/name/invalidCountry")
    const { country, status } = res.body.data
    expect(res.statusCode).toBe(404)
    expect(status).toBe("error")
    expect(country).toBeNull
    })

    it('should return 501 for unimplemeted API',  async () => {
        const res = await request(app).get("/undefineed/name/nigeria")
    const { country, status } = res.body.data
    expect(res.statusCode).toBe(501)
    expect(status).toBe("error")
    })
    
})