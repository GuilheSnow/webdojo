describe('Valida mouse over com o import da library cypress-real-events', ()=> {
  it('Deve mostrar msg ao passar mouse no elemento com mouse over', ()=>{
    cy.start() // Esse método vem do arquivo Commands.js que está na pasta support
    cy.submitLoginForm('papito@webdojo.com', 'katana123') // Esse método vem do arquivo Commands.js
    cy.contains('Isso é Mouseover!').should('not.exist')// Mostra que apenas apresenta msg após a função realHover()
    cy.get('[data-cy="instagram-link"]').realHover()
    cy.contains('Isso é Mouseover!').should('exist')
  })
})