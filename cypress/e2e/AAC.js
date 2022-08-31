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
    
    it('should show the AAC Airport', () => {
        let options = {
            method: 'GET',
            url: `${baseUrl}?iata=AAC`,
            headers: headers
        };
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('state', 'North Sinai Governorate')
            expect(response.body).to.have.property('name', 'El Arish International Airport')
            expect(response.body).to.have.property('city', '')
            expect(response.body).to.have.property('location', 'El Arish, Egypt')
            expect(response.body).to.have.property('county', 'Qesm Thaleth Al Arish')

        })
    })
})
