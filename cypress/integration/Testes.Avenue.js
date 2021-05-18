/// <reference types="cypress"/>

it('Testes Avenue', () => {

})

describe('Suite de Testes - Cypress', () => {
    describe('Casos de Testes - Tela inicial', () => {
        it('Validar acesso a página inicial do Cypress', () =>{
            cy.visit('https://www.cypress.io/')
            cy.title().should('contain', 'JavaScript End to End Testing Framework')
        })
       
        it('Validar titulo da tela inicial', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get('[data-cy=tag-line] > div').should('contain', 'The web has evolved.Finally, testing has too.')
        }) 
    
        it.skip('Validar botão "Install Cypress"', () => {
             cy.visit('https://www.cypress.io/')            
             cy.get('.with-bash-effects').click()
        }) 
         
        it('Validar opção "Installing Cypress - Cypress Test Runner"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get('.styled__ContentWrapper-pbfeas-0 > .mb-5').click()
        }) 

        it('Validar opção "Write tests - Cypress Test Runner"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get('.mb-5 > .row > :nth-child(2) > p > .Link-sc-5cc5in-0').click()
        }) 

        it('Validar opção "Dashboard - Cypress Dashboard"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get(':nth-child(2) > .row > :nth-child(2) > p > .Link-sc-5cc5in-0').click()
        }) 

        it('Validar opção "Developer-friendly"', () => {
             cy.visit('https://www.cypress.io/')            
             cy.get('.container > :nth-child(2) > :nth-child(1) > p > .Link-sc-5cc5in-0').click()
        }) 

        it('Validar opção "Open Source"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get('.container > :nth-child(2) > :nth-child(2) > p > .Link-sc-5cc5in-0').click()
        }) 
     
        it('Validar opção "Built from ground up"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get('.container > :nth-child(2) > :nth-child(2) > p > .Link-sc-5cc5in-0').click()
        }) 

        it('Validar botão "Learn more - Cypress Test Runner"', () => {
             cy.visit('https://www.cypress.io/')            
             cy.get('.styled__ContentWrapper-pbfeas-0 > .mb-5').click()
         }) 
     
        it('Validar botão "Learn more - Cypress Dashboard"', () => {
             cy.visit('https://www.cypress.io/')            
             cy.get('.styled__ContentWrapper-pbfeas-0 > :nth-child(2)').click()
        }) 
        
        it('Validar botão "Check out the code"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get('.d-inline-flex > .Link-sc-5cc5in-0').click()
        }) 

        it('Validar opção "Time Travel"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get(':nth-child(1) > .SvgTextCol__StyledInnerCol-txvs4m-0 > :nth-child(2) > div > p > .Link-sc-5cc5in-0').click()
        }) 

        it('Validar opção "Debuggability"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get(':nth-child(2) > :nth-child(2) > .SvgTextCol__StyledInnerCol-txvs4m-0 > :nth-child(2) > div > p > .Link-sc-5cc5in-0').click()
        }) 

        it('Validar opção "Automatic waiting"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get(':nth-child(3) > :nth-child(2) > .SvgTextCol__StyledInnerCol-txvs4m-0 > :nth-child(2) > div > p > .Link-sc-5cc5in-0').click()
        }) 

        it('Validar opção "Case Studies"', () => {
            cy.visit('https://www.cypress.io/')            
            cy.get('.styled__Epilogue-vn25ho-2 > .underlined').click()
        })         
    })
    
    describe('Casos de Testes Tela Feature', () => {
        it('Validar opção de menu "Feature"', () => {
            cy.visit('https://www.cypress.io/')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(1) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Write your first passing test in 60 seconds"', () => {
            cy.visit('https://www.cypress.io/features')
            cy.get(':nth-child(1) > .col-lg-5 > p').click()
        })

        it('Validar link "Written tests"', () => {
            cy.visit('https://www.cypress.io/features')
            cy.get('[href="https://on.cypress.io/bundled-tools"]').click()
        })

        it('Validar link "Debug Quickly"', () => {
            cy.visit('https://www.cypress.io/features')
            cy.get('.mb-0 > .col-lg-5 > p > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Command Log"', () => {
            cy.visit('https://www.cypress.io/features')
            cy.get(':nth-child(2) > :nth-child(1) > .SvgTextCol__StyledInnerCol-txvs4m-0 > :nth-child(2) > div > p > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Debug"', () => {
            cy.visit('https://www.cypress.io/features')
            cy.get(':nth-child(2) > :nth-child(2) > .SvgTextCol__StyledInnerCol-txvs4m-0 > :nth-child(2) > div > p > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Waits for commands and assertions"', () => {
            cy.visit('https://www.cypress.io/features')
            cy.get(':nth-child(3) > :nth-child(2) > .SvgTextCol__StyledInnerCol-txvs4m-0 > :nth-child(2) > div > p > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Verify and Control"', () => {
            cy.visit('https://www.cypress.io/features')
            cy.get(':nth-child(4) > :nth-child(1) > .SvgTextCol__StyledInnerCol-txvs4m-0 > :nth-child(2) > div > p > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Control, Stub and Test Edge Cases"', () => {
            cy.visit('https://www.cypress.io/features')
            cy.get(':nth-child(4) > :nth-child(2) > .SvgTextCol__StyledInnerCol-txvs4m-0 > :nth-child(2) > div > p > .Link-sc-5cc5in-0').click()
        })
    })

    describe('Casos de Testes - Tela How it Works', () => {
        it('Validar opção de menu "How it Works"', () => {
            cy.visit('https://www.cypress.io/')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(2) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Multiple tools in one"', () => {
            cy.visit('https://www.cypress.io/how-it-works')
            cy.get(':nth-child(5) > p > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Dashboards Service"', () => {
            cy.visit('https://www.cypress.io/how-it-works')
            cy.get(':nth-child(7) > p > .Link-sc-5cc5in-0').click()
        })
    })

    describe('Casos de Testes - Tela Dashboard', () => {
        it('Validar opção de menu "Dashboard"', () => {
            cy.visit('https://www.cypress.io/')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

        it('Validar botão "Get Started Free"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get('.HeroEpilogue__Wrapper-sc-1rc79qm-0 > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Improve your testing dramatically with the Cypress Dashboard"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get('.styled__Wrapper-sc-13ka66p-0 > .container > .SectionTitle-uwawm7-0 > .text-center > .SectionTitle_epilogue > p > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Supercharged Velocity - Up to 75%"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get(':nth-child(1) > .styled__HighlightContent-sc-13ka66p-6 > ul > :nth-child(1) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Reduced Execution Time - Multiple browsers"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get(':nth-child(2) > .styled__HighlightContent-sc-13ka66p-6 > ul > :nth-child(1) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Reduced Execution Time - Parallelization"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get('[href="http://on.cypress.io/parallelization"]').click()
        })

        it('Validar link "Reduced Execution Time - Up to 5x faster"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get('[href="https://go.cypress.io/siemens-casestudy"]').click()
        })

        it('Validar link "Run in CI - Docker images"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get('.fa-ul > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Automatic load balancing"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get(':nth-child(5) > .container > .SectionTitle-uwawm7-0 > .text-center > .SectionTitle_epilogue > p > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Grouping"', () => {
            cy.visit('https://www.cypress.io/dashboard')
            cy.get(':nth-child(6) > .container > .SectionTitle-uwawm7-0 > .text-center > .SectionTitle_epilogue > p > .Link-sc-5cc5in-0').click()
        })
    })
    
    describe('Casos de Testes - Tela Pricing', () => {
        it('Validar opção de menu "Pricing"', () => {
            cy.visit('https://www.cypress.io/')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Test Runner"', () => {
            cy.visit('https://www.cypress.io/pricing')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

        it('Validar opções "Team & Business"', () => {
            cy.visit('https://www.cypress.io/pricing')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

        it('Validar botão "Apply for our OSS plan"', () => {
            cy.visit('https://www.cypress.io/pricing')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Rodmap"', () => {
            cy.visit('https://www.cypress.io/pricing')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Docs"', () => {
            cy.visit('https://www.cypress.io/pricing')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

        it('Validar link "Support options"', () => {
            cy.visit('https://www.cypress.io/pricing')
            cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1) > :nth-child(3) > .Link-sc-5cc5in-0').click()
        })

    })
})
