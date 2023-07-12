/// <reference types="cypress" />

describe('test_name', function() {

  it('what_it_does', function() {
 
     cy.viewport(1600, 717)
  
     cy.visit('http://localhost:3000/')
  
     cy.visit('http://localhost:3000/auth/login')
  
     cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #email').click()
  
     cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #email').type('1@1.com')
  
     cy.get('.min-h-screen > .items-center > .mt-8 > .w-full > #password').type('12345678')     
  
  })
 
 })
 