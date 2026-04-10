// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-real-events'

Cypress.Commands.add('start', ()=>{
    // steps de config para acessar a url e configurar resolução
    cy.viewport(1920,1080)
    cy.visit('http://localhost:3000')
})

//Helpers:
Cypress.Commands.add('login', ()=>{
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')
})

Cypress.Commands.add('submitLoginForm', (email, senha)=>{
    // Steps de navegação comun na suite de login
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('goTo', (pageTitle, buttonName)=>{
    cy.contains('button', buttonName)
            .should('be.visible').click()
        
        cy.contains('h1', pageTitle)
            .should('be.visible')
})


