describe('Airport', () => {
    const baseUrl = "https://airport-info.p.rapidapi.com/airport"
    const headers = {
        'X-RapidAPI-Key': 'c48894f37cmshb04e7eacc519c1dp14709djsn2a84546722da',
        'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
    }
    before(() => {
        let options = {
            method: 'GET',
            url: baseUrl,
            headers: headers
        };

        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    
    it('should show the DBX Airport', () => {
        let options = {
            method: 'GET',
            url: `${baseUrl}?iata=DXB`,
            headers: headers
        };
        cy.request(options).then((response) => {
            expect(response.body).to.have.property('name', 'Dubai International Airport')
            expect(response.body).to.have.property('location', 'Dubai, United Arab Emirates')
            expect(response.body).to.have.property('city', 'Dubai')
            expect(response.body).to.have.property('state', 'Dubai')
            expect(response.body).to.have.property('country_iso', 'AE')
        })
    })
})
