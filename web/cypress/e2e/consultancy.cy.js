describe('Formulário de Consultoria', ()=>{
    it('Deve solicitar consultoria individual', ()=>{
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Consultoria', 'Formulários')

        cy.get('input[placeholder="Digite seu nome completo"]')
            .type('Teste da Silva Soares')
        cy.get('input[placeholder="Digite seu email"]')
            .type('emailteste@email.org')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('99987654321')
            .should('have.value', '(99) 98765-4321')
        
        cy.get('#consultancyType')
            .select('Individual')
        
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')
        
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('not.be.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('17374817070')
            .should('have.value', '173.748.170-70')

        
        // Array com os canais disponíveis em "Como nos conheceu?":
        let chanels = ['Instagram', 'LinkedIn', 'Udemy', 'YouTube', 'Indicação de Amigo']

        // Loop que faz o check em cada canal disponível em "Como nos conheceu?":
        chanels.forEach((chanel)=>{
            cy.contains('label', chanel)
            .find('input')
            .check()
            .should('be.checked')
        })

        // código que faz upload de arquivo na aplicação:
        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/document_test.pdf', { force: true})// force=true, modifica o parâmetro que era false no html
        
        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type('Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos utilizado desde o século XVI.')
        
        
        // Array com as tecnologias que conheço:
        let technologies = [
            'Cypress', 
            'RobotFramework', 
            'Selenium', 
            'Python', 
            'JavaScript']

        // Laço FOR EACH que preenche na página as techs que conheço:
        technologies.forEach((technology)=>{
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(technology)
                .type('{enter}')
            
            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', technology)
                .should('be.visible')        
        })

        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

        cy.contains('button', 'Enviar formulário')
            .click()
        
        cy.contains('h3', 'Sucesso!', {timeout: 7000})
            .should('be.visible')
        
        cy.contains('button', 'Fechar')
            .click()
    })

    it('Deve verificar os campos obrigatórios', ()=>{
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Consultoria', 'Formulários')
        cy.contains('button', 'Enviar formulário')
            .click()

        cy.contains('label', 'Nome Completo *')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
        
        cy.contains('label', 'Email *')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
        
        cy.contains('label', 'termos de uso')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Você precisa aceitar os termos de uso')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
    })
})