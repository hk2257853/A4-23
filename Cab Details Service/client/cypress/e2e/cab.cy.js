/// <reference types="cypress" />


describe('add cab details', function() {

  it('login to the site and add cab details', function() {
 
    cy.viewport(1280, 573)
  
    cy.visit('http://localhost:3000/')
    
    cy.get('.bg-white > .px-3 > .flex > .flex > .inline-flex').click()
    
    cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #email').click()
    
    cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #email').type('1@1.com')
    
    cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #password').type('12345678')
    
    cy.get('#\__next > .min-h-screen > .items-center > .mt-8 > .w-full:nth-child(3)').click()
    
    cy.wait(4000)

    cy.visit('http://localhost:3000/cabpg')
    
    cy.get('#\__next > .min-h-screen > .pt-20 > .flex > .border').click()

    cy.get('.mt-8 > .w-full > .flex > .w-full > #cab-regno').click()
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #cab-regno').type('GA 20 T 0123')
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #model').click()
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #model').type('LXI')
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #colour-no').click()
 
    cy.get('.mt-8 > .w-full > .flex > .w-full > #colour-no').type('Red')
 
    cy.get('.fixed > .flex > .inline-block > .bg-gray-50 > .w-full').click()
  
  })
 
 })