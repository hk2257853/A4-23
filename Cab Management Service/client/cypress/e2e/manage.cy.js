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

    cy.wait(4000)

    cy.visit('http://localhost:3000/managepg')
 
    cy.get('#\__next > .min-h-screen > .pt-20 > .flex').click()
      
    cy.get('.inline-block > .bg-white > form > .mb-6 > #name').select('full same name lolasdf')
      
    cy.get('.inline-block > .bg-white > form > .flex > .bg-cyan-600').click()

    // TODO: can't understand what's going wrong from here
      
    cy.get('.inline-block > .bg-white > form > .mb-6 > #name').select('test')
      
    cy.get('.inline-block > .bg-white > form > .flex > .bg-cyan-600:nth-child(2)').click()     
  
  })
 
 })