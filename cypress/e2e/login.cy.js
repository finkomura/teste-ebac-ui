/// <reference types ="cypress"/>

context ('Funcionalidade Login', () =>{
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')
    });
    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('alunoebac.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li > :nth-child(1)').should('contain','Erro')
        cy.get('.woocommerce-error > li').should('contain','usuário')
    });
    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhaerrada')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li > :nth-child(1)').should('contain','Erro')
        cy.get('.woocommerce-error > li').should('contain','senha')
    })

})