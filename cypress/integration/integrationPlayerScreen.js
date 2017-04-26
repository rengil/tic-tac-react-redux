/* eslint-disable */
describe('Players Screen', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/')
  })

  context('Players Screen', function(){
    it('Should work if a type two names and then click enter', function() {
      cy.focused().type('teste');
      cy.get('#nought').type('Flávia')
      cy.get('#nought').type("{enter}")
      cy.get('.square-container>.row>.column>').children().should('have.length', 9);
    });

    it('Should work as well if I click the button', function() {
      cy.focused().type('teste');
      cy.get('#nought').type('Flávia')
      cy.get('.set').click();
      cy.get('.square-container>.row>.column>').children().should('have.length', 9);
    });

    it('Show message when forget to type nought', function() {
      cy.focused().type('teste');
      cy.get('#nought').type("{enter}")
      cy.get('.errormessage').should(function($message){
        expect($message).to.have.class("-show")
        expect($message).to.be.visible
      })
    });

    it('Show message when forget to type circle', function() {
      cy.get('#nought').type('Flávia')
      cy.get('#nought').type("{enter}")
      cy.get('.errormessage').should(function($message){
        expect($message).to.have.class("-show")
        expect($message).to.be.visible
      })
    });

    it('Two same names get error', function() {
      cy.focused().type('Flávia');
      cy.get('#nought').type('Flávia')
      cy.get('#nought').type("{enter}")
      cy.get('.errormessage').should(function($message){
        expect($message).to.have.class("-show")
        expect($message).to.be.visible
      })
    });
  });

});
