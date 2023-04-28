describe('CameraList', () => {
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

  it('displays CameraList component', () => {
    cy.get('[data-testid="camera-list-component"]').should('exist')
  })

  it('should have 3 Camera Component Children', () => {
    cy.get('[data-testid="camera-component"]').its('length').should('eq', 3)
  })
});