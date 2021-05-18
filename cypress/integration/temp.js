/// <reference types="cypress"/>


describe('Suite de Testes - Cypress', () => {
    describe('Casos de Testes - Positivos', () => {
        it('Validar acesso a página inicial do Cypress', () =>{
            cy.visit('https://www.cypress.io/')
            cy.title().should('contain', 'JavaScript End to End Testing Framework')
        })
    })
    
    describe('Validar titulo da tela inicial', () => {
       it('Text', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get('[data-cy=tag-line] > div').should('contain', 'The web has evolved.Finally, testing has too.')
        }) 
    })
    
    describe('Validar botão "Feature"', () => {
        it('Validar botão Feature', () => {
            cy.visit('https://www.cypress.io/')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(1) > .Link-sc-5cc5in-0').click()
        })
    })

    describe('Casos de Testes - Negativos', () => {
        it.skip('Validar acesso a página inicial do Cypress - INDISPONÍVEL', () => {
            const config = {failOnStatusCode : true }
            cy.visit('https://www.cypres.io/', config)
            //cy.title().should('contain', 'JavaScript End to End Testing Framework')
        })
    })
    
   
})
