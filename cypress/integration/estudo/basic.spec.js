/// <reference types="cypress"/>

describe('Testes Avenue', () => {
    it('Validar tela inicial "Cypress"', () => {
        cy.visit('https://www.cypress.io/')
    })
})

        
      
    describe('Validar tela Features', () => {
        it.only('Text', () => {
            cy.visit('https://www.cypress.io/')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(1) > .Link-sc-5cc5in-0').click()
            
            cy.get('[data-cy=tag-line]').should('contain', 'A test runner built for humans.')

            //cy.get('.Hero-TagLine').should('contain', 'A test runner built for humans.')
            //cy.get('body').should('contain', 'asas')

        })

    })
    describe('Validar botão "Feature"')
    it('Validar botão Feature', () => {
        cy.visit('https://www.cypress.io/')

        cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(1) > .Link-sc-5cc5in-0').click()
    })

    })
    
})