const HRM_URL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe('Automation on OrangeHRM', () => {
    beforeEach(() => {
        cy.visit(HRM_URL);
    });

    // TASK 1 
    
    it('dashboard display after login', () => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
        cy.get('.oxd-button').click();

        cy.log('Login Successfull')

        cy.wait(4000);
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
        
    });

    // TASK 2

    it('Assertions to check for correct username display after login', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
        cy.get('.oxd-button').click();

        cy.log('Login Successfull')
        
        cy.get('.oxd-userdropdown-name').should('have.text', 'Admin');
        cy.log('Username is not matching');
    });

    it('Handling hidden elements', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
        cy.get('.oxd-button').click();

        cy.log('Login Successfull')
        
        cy.get('[class="oxd-main-menu"]').contains('Admin').first().trigger('mouseover').click();
        
    });

    it('checking a  error messages', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin12');
        cy.get('.oxd-button').click();

        cy.log('Login Unsuccessfull - Invalid login')
        
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');

    });
}); 
