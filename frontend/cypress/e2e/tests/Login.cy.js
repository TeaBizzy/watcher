describe('Login', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/')
  })

  it('displays login component', () => {
    cy.get('[data-testid="login-component"]').should('exist')
    cy.get('[data-testid="header-component"]').should('not.exist')
  })

  it('Updates input state', () => {
    cy.get('input[name="email"]')
      .type('stefan@email.com')
      .should('have.value', 'stefan@email.com');

    cy.get('input[name="password"]')
      .type('password')
      .should('have.value', 'password');
  })

  it('Should display error messages on invalid inputs', () => {
    // No inputs or email
    cy.contains('LOGIN').click()
    cy.contains("Email can't be blank").should('exist');

    cy.get('input[name="password"]')
      .type('password')
    cy.contains('LOGIN').click()
    cy.contains("Email can't be blank").should('exist');

    // No password
    cy.get('input[name="email"]')
      .type('stefan@email.com')
    cy.get('input[name="password"]')
      .clear()
    cy.contains('LOGIN').click()
    cy.contains("Password can't be blank!").should('exist');

    // Wrong email or password
    cy.get('input[name="email"]')
      .clear()
      .type('bob@email.com')
    cy.get('input[name="password"]')
      .type('qwerty')
    cy.contains('LOGIN').click()
    cy.contains("Invalid Email or Password").should('exist');
  })

  it('Should switch views on successful login', () => {
    cy.get('input[name="email"]')
      .type('stefan@email.com')
    cy.get('input[name="password"]')
      .type('password')
    cy.contains('LOGIN').click()
    cy.get('[data-testid="login-component"]').should('not.exist')
  })
});