/// <reference types ="cypress"/>
import EnderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade enterecos - Faturamento e Entrega', () => {
    beforeEach(() => {
        //login 
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados=>{
            cy.login(dados.usuario, dados.senha)
        })
    });
    it('deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('vi','blabla','essai','Brasil','local','101','barcarena', 'minas gerais','10010-111','911119999','blablabla@loll.com')
        cy.get('.woocommerce-message').should('contain','alterado com sucesso.')
    });

    it.only('deve fazer cadastro de faturamento com sucesso - usando massa de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain','alterado com sucesso.')
    });
});
