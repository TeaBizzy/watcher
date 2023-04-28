describe('CameraView', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="login-component"]')
    cy.get('input[name="email"]')
      .type('stefan@email.com')
    cy.get('input[name="password"]')
      .type('password')
    cy.contains('LOGIN').click()
    cy.get('[data-testid="camera-component"]')
      .first()
      .click()

  })
  
  it('displays CameraView Component', () => {
    cy.get('[data-testid="camera-view-component"]').should('exist')
  })

  it('the correct video should be playing', () => {
    cy.get('video').should('have.attr', 'src', 'http://localhost:3030/api/stream/1')
  })

  it('Dismounts in mobile view after clicking the back button', () => {
    cy.viewport(360, 760)
    cy.get('[data-testid="camera-view-component"]').should('exist')
    cy.get('[data-testid="back-button"]')
      .click()
    cy.get('[data-testid="camera-view-component"]').should('not.exist')
  })
});