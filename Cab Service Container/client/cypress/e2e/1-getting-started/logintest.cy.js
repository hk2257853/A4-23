/// <reference types="cypress" />

describe('test_name', function() {

  it('what_it_does', function() {
 
     cy.viewport(1600, 717)
  
     cy.visit('http://localhost:3000/')
  
     cy.visit('http://localhost:3000/auth/login')
  
     cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #email').click()
  
     cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #email').type('2@2.com')
  
     cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #password').type('2')
  
   //   cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > .appearance-none').click()
  
     cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > .appearance-none').select('driver')
  
   //   cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > .appearance-none').click()
  
     cy.get('#\__next > .min-h-screen > .items-center > .mt-8 > .w-full:nth-child(4)').click()
  
     cy.get('.divide-y:nth-child(1) > .py-2 > .flex > .w-6:nth-child(2) > svg').click()
  
     cy.get('.mt-8 > .w-full > .flex > .w-full > #driver-name').click()
  
     cy.get('.mt-8 > .w-full > .flex > .w-full > #driver-name').type('asdf')
  
     cy.get('.fixed > .flex > .inline-block > .bg-gray-50 > .w-full').click()
  
  })
 
 })
 