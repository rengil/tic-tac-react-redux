/* eslint-disable */
describe('Players Screen', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
    cy.focused().type('teste');
    cy.get('#nought').type('Flávia')
    cy.get('#nought').type("{enter}")
    cy.get('.square-container>.columns>.column>').children().should('have.length', 9);
  })

  context('Players Screen', function(){
    it('Testing a win', function() {
      cy.get('.square-container>.columns>.column>').children().should('have.length', 9);
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(2).click();
    });

    it('Testing another win', function() {
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(2).click();
    });

    it('Now we have a draw', function() {
      cy.get('.tictac-square').eq(5).click();
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(8).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(2).click();
      cy.get('.tictac-square').eq(4).click();
      cy.get('.tictac-square').eq(7).click();
      cy.get('.tictac-square').eq(7).click();
    });


  });

});
