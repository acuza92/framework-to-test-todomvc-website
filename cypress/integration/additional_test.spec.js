describe('Additional Tests for TodoMVC website', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="examples/angularjs"]').click({ force: true })
        cy.additionElement(['ToDO 1', 'ToDO 2', 'ToDO 3'], '[placeholder="What needs to be done?"]')
    })
    describe('Additional Test Case #1', () => {
        describe('Delete element', () => {
            //1. scenario
            it('When delete element completed "ToDO 3" ', () => {
                (
                    cy.elementCompleted(2),
                    cy.get('.footer > button').click()
                )
            })
            //2. scenario
            it('When verify that element "ToDO 3" not exist', () => {
                (
                    cy.elementCompleted(2),
                    cy.get('.footer > button').click(),
                    cy.verifyNotExist('ToDO 3')
                )
            })
        })

    })

})