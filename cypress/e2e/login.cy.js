/// <reference types ="cypress"/>
const perfil=require('../fixtures/perfil.json')

context ('Funcionalidade Login', () =>{
    beforeEach(() => {
        cy.visit('minha-conta')

    });
    afterEach(() => {
        cy.screenshot()
    });
    it.only('Deve fazer login com sucesso', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá')
    });
    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('alunoebac.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li > :nth-child(1)').should('contain','Erro')
        cy.get('.woocommerce-error > li').should('contain','usuário')
    });
    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhaerrada')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li > :nth-child(1)').should('contain','Erro')
        cy.get('.woocommerce-error > li').should('contain','senha')
    })

})