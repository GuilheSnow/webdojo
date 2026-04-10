describe('Valida mouse over com o import da library cypress-real-events', () => {

    before(() => {
      cy.login()
    })
    
    it('Deve mostrar msg ao passar mouse no elemento com mouse over', () => {
      cy.contains('Isso é Mouseover!').should('not.exist')// Mostra que apenas apresenta msg após a função realHover()
      cy.get('[data-cy="instagram-link"]').realHover()
      cy.contains('Isso é Mouseover!').should('exist')
    })
})