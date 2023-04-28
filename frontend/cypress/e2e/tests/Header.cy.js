describe('Header', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="login-component"]')
    cy.get('input[name="email"]')
      .type('stefan@email.com')
    cy.get('input[name="password"]')
      .type('password')
    cy.contains('LOGIN').click()
  })
  
  it('display the Header component', () => {
    cy.get('[data-testid="header-component"]').should('exist')
  })

  it('display the logged in users email', () => {
    cy.contains('STEFAN@EMAIL.COM').should('exist')
  })

  it('should dismount on logout', () => {
    cy.contains('LOGOUT').click()
    cy.get('[data-testid="header-component"]').should('not.exist')
    cy.get('[data-testid="login-component"]').should('exist')
  })
});