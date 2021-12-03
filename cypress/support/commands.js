Cypress.Commands.add('additionElement', (arr, field) => {
    cy.get(arr).each(($data) => {
        cy.get(field).type(`${$data} {enter}`)
    })
})

Cypress.Commands.add('modify', (position, element) => {
    cy.get('ul.todo-list > li').eq(position).dblclick().clear().type(element)
})

Cypress.Commands.add('verify', (position, element) => {
    cy.get('ul.todo-list > li').eq(position).should('contain', element)
})

Cypress.Commands.add('elementCompleted', (position) => {
    cy.get('ul.todo-list > li > .view > input').eq(position).check()
})

Cypress.Commands.add('verifyNotExist', (element) => {
    cy.get('ul.todo-list > li').should('not.have.value', element)
})

