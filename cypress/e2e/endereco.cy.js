/// <reference types ="cypress"/>
import EnderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade enterecos - Faturamento e Entrega', () => {
    beforeEach(() => {
        //login 
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados=>{
            cy.login(dados.usuario, dados.senha)
        })
    });
    it.only('deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento()
        cy.get('.woocommerce-message').should('contain','alterado com sucesso.')
    });
});
