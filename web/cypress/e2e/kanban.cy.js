describe('Kanban Board', ()=>{
    before(()=>{
        cy.login()
    })

    it('Deve mover uma tarefa de ToDo para Done e atualizar board',()=>{
        cy.contains('Kanban').click()

        /*Ao instânciar esse objeto abaixo, ele permite transferir um bloco HTML
        como por exemplo body, button, div etc para outra parte do HTML*/
        const dataTransfer = new DataTransfer()

        /*No step abaixo a função nativa do cypress 'trigger' recebe a instrução
        'dragstart' o que significa que ela pega o objeto que foi identificado no
        'contains' e faz um 'segurar e arrastar', restando agora o step de soltar
        o objeto em outro lugar do html*/
        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', {dataTransfer})
        
        /*Função nativa do cypress 'trigger + 'drop' = soltar o dataTransfer na
        Column-Done*/
        cy.get('.column-done')
            .trigger('drop', {dataTransfer})
            .find('h3')
            .should('have.text', 'Done (4)')
        
        cy.get('.column-done')
            .should('include.text', 'Documentar API')
            .and('include.text', 'Criar documentação da API com Swagger')
    })
})