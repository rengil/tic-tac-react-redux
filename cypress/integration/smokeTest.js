/* eslint-disable */
describe('Smoke Test', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/')
  })

  context('Smoke test', function(){
    it('Passing fast through the app', function() {

      cy.get('#circle').type('Renan', {force: true})
      cy.get('#nought').type('Flávia', {force: true})
      cy.get('.set').click();

      cy.get('.square-container>.columns>.column>').children().should('have.length', 9);
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(2).click();

      cy.get('#again').click();
      cy.get('#change').click();

      cy.get('#circle').type('Renan', {force: true})
      cy.get('#nought').type('Flávia', {force: true})
      cy.get('.set').click();

      cy.get('.square-container>.columns>.column>').children().should('have.length', 9);

    })
  })
})
