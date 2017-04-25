describe('Smoke Test', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/')
  })

  context('Smoke test', function(){
    it('focus on the draw player input', function(){

      cy.get('#circle').type('Renan', {force: true})
      cy.get('#nought').type('Flávia', {force: true})
      cy.get('.set').click();

      cy.get('.square-container>.row>.column>').children().should('have.length', 9);
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(2).click();

      cy.get('#again').click();

      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(6).click();
      cy.get('.tictac-square').eq(2).click();

      cy.get('#change').click();

      cy.get('#circle').type('Gil', {force: true})
      cy.get('#nought').type('Batman', {force: true})
      cy.get('.set').click();

      cy.get('.tictac-square').eq(5).click();
      cy.get('.tictac-square').eq(0).click();
      cy.get('.tictac-square').eq(8).click();
      cy.get('.tictac-square').eq(3).click();
      cy.get('.tictac-square').eq(1).click();
      cy.get('.tictac-square').eq(2).click();
      cy.get('.tictac-square').eq(4).click();
      cy.get('.tictac-square').eq(7).click();
      cy.get('.tictac-square').eq(7).click();

    })
  })
})
