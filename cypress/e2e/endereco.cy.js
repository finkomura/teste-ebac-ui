/// <reference types ="cypress"/>


describe('Funcionalidade enterecos - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados=>{
            cy.login(dados.usuario, dados.senha)
        })
    });
    it('', () => {
    
    });
});
