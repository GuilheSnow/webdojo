describe('Links abrindo nova guia/janela', ()=>{

    beforeEach(()=>{
        cy.login()
    })
    
    it('Validando o atributo do link do instagram', ()=>{
        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .should('have.attr', 'target', '_blank')
    })

    it.only('Acessa link de termos de uso', ()=>{
        cy.goTo('Consultoria', 'Formulários')
        
        cy.contains('a', 'termos de uso')
            .should('exist')
            .invoke('removeAttr', 'target') //Função que remove do DOM o atributo para que seja carregada na mesma página
            .click()
        
        cy.contains('h1', 'Termos de Uso')
            .should('be.visible')

    })
})