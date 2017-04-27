/* eslint-disable */
describe('Players Screen', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
    cy.focused().type('Léia');
    cy.get('#nought').type('Luke')
    cy.get('#nought').type("{enter}")
    cy.get('.square-container>.columns>.column>').children().should('have.length', 9);
  })

  context('Players Screen', function(){
    it('Win two times, leadeboard shows 2 times', function() {
      cy.get('.square-container>.columns>.column>').children().should('have.length', 9);
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(2).click();
      cy.get('.players-leaderboard>.list').children().should('have.length', 1);
      cy.get('#again').click();

      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(5).click();
      cy.get('.tictac-square').eq(2).click();
      cy.get('.players-leaderboard>.list').children().should('have.length', 1);
    });

    it('Win two persons, leadeboard has 2 people', function() {
      cy.get('.square-container>.columns>.column>').children().should('have.length', 9);
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(2).click();
      cy.get('.players-leaderboard>.list').children().should('have.length', 1);
      cy.get('#again').click();

      cy.get('.square-container>.columns>.column>').children().should('have.length', 9);
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(2).click();

      cy.get('.players-leaderboard>.list').children().should('have.length', 2);

    });

  });

});
