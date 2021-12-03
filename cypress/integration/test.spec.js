describe('Tests for TodoMVC website', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="examples/angularjs"]').click({ force: true })
        cy.additionElement(['ToDO 1', 'ToDO 2', 'ToDO 3'], '[placeholder="What needs to be done?"]')
    })

    afterEach(() => {
        cy.clearLocalStorage('todos-angularjs')
    })

    describe('Test Case #1', () => {
        //3. scenario
        it('When verify that the element “ToDo 3 ” is in the 3rd position of the list', () => {
            (
                cy.verify(2, 'ToDO 3')
            )
        })
    })

    describe('Test Case #2', () => {
        //1. scenario
        it('When modify the element “ToDo 2” with the value “ToDo 4” ', () => {
            (
                cy.modify(1, 'ToDO 4')
            )
        })
        //2. scenario
        it('When verify that the element “ToDo 4” is now in the 2 nd position of the list ', () => {
            (
                cy.modify(1, 'ToDO 4'),
                cy.verify(1, 'ToDO 4')
            )
        })
        //3. scenario
        it('When verify that the element “ToDo 2” does not appear in the list', () => {
            (
                cy.modify(1, 'ToDO 4'),
                cy.verifyNotExist('ToDO 2')
            )
        })
    })

    describe('Test Case #3', () => {
        //1. scenario
        it('When mark the element “ToDo 3” as complete', () => {
            (
                cy.elementCompleted(2)
            )
        })
        //2 & 3. scenario
        it('When print in the console the elements listed', () => {
            (
                cy.elementCompleted(2),
                cy.get('a[href = "#/active"]').click(),
                cy.get('ul.todo-list > li')
                    .each(($li) => {
                        cy.log('The elements listed', $li.text())
                    })
            )
        })
    })

})
