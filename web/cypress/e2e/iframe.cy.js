describe('IFrame do site webdojo', ()=>{
    before(()=>{
        cy.login()
    })

    it('Deve poder tocar o vídeo de exemplo', ()=>{
        cy.contains('Video').click()
        
        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayer')
        
        cy.get('@iFramePlayer')
            .find('.play-button', {timeout: 7000})
            .click()
        
        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
    })
})