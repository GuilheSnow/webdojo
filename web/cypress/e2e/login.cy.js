//Criando uma nova describe que agrupa Casos de Testes Automatizados de login
describe('Login', ()=> {
  it('Deve logar com sucesso', ()=>{
    cy.start() // Esse método vem do arquivo Commands.js que está na pasta support
    cy.submitLoginForm('papito@webdojo.com', 'katana123') // Esse método vem do arquivo Commands.js

    // Steps de Validação exclusivos deste teste 'Deve logar com sucesso':
    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })

  it('Não Deve logar com senha inválida', ()=>{
    cy.start() // Esse método vem do arquivo Commands.js que está na pasta support
    cy.submitLoginForm('papito@webdojo.com', 'senhainválida') // Esse método vem do arquivo Commands.js

    // Steps de Validação exclusivos deste teste 'Não Deve logar com senha inválida':
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

  it('Não Deve logar com e-mail não cadastrado', ()=>{
    cy.start() // Esse método vem do arquivo Commands.js que está na pasta support
    cy.submitLoginForm('email_nao_cadastrado@webdojo.com', 'senhainválida2026') // Esse método vem do arquivo Commands.js

    // Steps de Validação exclusivos deste teste 'Não Deve logar com e-mail não cadastrado':
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})