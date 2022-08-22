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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('switchToIframe', (iframeSelector, ...elSelector) => {
    return cy
    .get(`${iframeSelector || ''} > iframe`, {timeout : 10000})
    .should($iframe => {
        for(let i = 0; i < elSelector.length; i++){
            expect($iframe.contents().find(elSelector[i] || 'body')).to.exist;
        }
    })
    .then($iframe => {
        return cy.wrap($iframe.contents().find('body'))
    })
})
