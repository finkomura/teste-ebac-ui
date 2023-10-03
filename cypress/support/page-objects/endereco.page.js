class EnderecoPAge {

    editarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a'). click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type('vicky')
        cy.get('#billing_last_name').clear().type('omura')
        cy.get('#billing_company').clear().type ('ebac')

        cy.get('#select2-billing_country-container').click(). type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('Av sao joao')
        cy.get('#billing_address_1').clear().type(1001)
        cy.get('#billing_city').clear().type('Pindamoiangaba')
        cy.get('#select2-billing_state-container').click().type('Rio de Janeiro{enter}')
        cy.get('#billing_postcode').clear().type('10022-125')
        cy.get('#billing_phone').clear().type('996003535')
        cy.get('#billing_email').clear().type('teste@teste.ebac')
        cy.get(':nth-child(2) > .button').click()
    }
    editarEnderecoEntrega() {
        //elemento + acao
    }

}

export default new EnderecoPAge()