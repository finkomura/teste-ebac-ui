/// <reference types ="cypress"/>

describe('funcionalidadepagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    it('deve selecionar um produto', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.eq(3)
        //.last
        .contains('Ariel Roll')
        .click()
    });
    it('deve adicionar ao carrinho', () => {
       var quantidade = 3
        cy.get('[class="product-block grid"]').contains('Abominable').click()

        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain',' “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
    it.only('deveadicionar produtos ao carrinho utilizando comandos customizados', () => {
        cy.addProdutos('Abominable', 'S', 'Blue', 3)
    });
});