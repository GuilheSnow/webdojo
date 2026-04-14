Cypress.Commands.add('fillConsultancyForm', (formJson)=>{
    //steps do caso de teste:
        cy.get('input[placeholder="Digite seu nome completo"]')
            .type(formJson.name)
        cy.get('input[placeholder="Digite seu email"]')
            .type(formJson.email)
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type(formJson.phone)
            //.should('have.value', '(99) 98765-4321')

        cy.get('#consultancyType')
            .select(formJson.consultancyType)

        // Esse bloco IF ELSE, valida o tipo de pessoa e preenche o form
        if(formJson.personType === "CPF"){
            //Seleciona o tipo de pessoa como PF
            cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')

            //Valida que PJ não está selecionada:
            cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('not.be.checked')

            cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(formJson.document)
            //.should('have.value', '173.748.170-70')
        }
        else if(formJson.personType == "CNPJ"){
            //Seleciona o tipo de pessoa como PJ
            cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .check()
            .should('be.checked')

            //Valida que PF não está selecionada:
            cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('not.be.checked')

            cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(formJson.document)
        } // Fim do bloco IF ELSE
        
        // Loop que faz o check em cada canal disponível em "Como nos conheceu?":
        formJson.chanels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        // código que faz upload de arquivo na aplicação:
        cy.get('input[type="file"]')
            .selectFile(formJson.file, { force: true })// force=true, modifica o parâmetro que era false no html

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(formJson.description)

        // Laço FOR EACH que preenche na página as techs que conheço:
        formJson.technologies.forEach((technology) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(technology)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', technology)
                .should('be.visible')
        })

        if(formJson.terms){
            cy.contains('label', 'termos de uso')
            .find('input')
            .check()
        }
})

Cypress.Commands.add('submitConsultancyForm', ()=>{
    cy.contains('button', 'Enviar formulário').click()
})

Cypress.Commands.add('validateConsultancyModal', ()=> {
    cy.contains('h3', 'Sucesso!', { timeout: 7000 })
            .should('be.visible')
})