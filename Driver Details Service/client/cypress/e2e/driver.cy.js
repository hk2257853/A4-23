/// <reference types="cypress" />


describe('add driver details', function() {

 it('login to the site and add driver details', function() {

    cy.viewport(1280, 573)
 
    cy.visit('http://localhost:3000/')
 
    cy.get('.bg-white > .px-3 > .flex > .flex > .inline-flex').click()
 
    cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #email').click()
 
    cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #email').type('1@1.com')
 
    cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #password').type('12345678')
 
    cy.get('#\__next > .min-h-screen > .items-center > .mt-8 > .w-full:nth-child(3)').click()
 
    cy.get('#\__next > .min-h-screen > .pt-20 > .flex > .border').click()
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #driver-name').click()
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #driver-name').type('TestName')
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #email').type('test@test1.com')
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #contact-no').type('1234567890')
 
    cy.get('.fixed > .flex > .inline-block > .bg-gray-50 > .w-full').click()
 
 })

})