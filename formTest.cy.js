const DEMO_QA_URL = "https://demoqa.com/automation-practice-form";

describe('Automation on DemoQA', () => {
    beforeEach(() => {
        cy.visit(DEMO_QA_URL);
    });
    it('Form Filling via automation', () => {
        cy.get('#firstName').type('Atul');
        cy.get('#lastName').type('Pal');
        cy.get('#userEmail').type('xyz@gmail.com');

        cy.get('[name="gender"][id="gender-radio-1"]').check({force:true});

        cy.get('#userNumber').type('9874563210');

        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('2003');
        cy.get('.react-datepicker__month-select').select('January');
        cy.get('.react-datepicker__day react-datepicker__day--016 react-datepicker__day--selected').click();

        cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]').type('Java');

        cy.get('#hobbies-checkbox-1').check({force:true});

        cy.get('#uploadPicture').attachFile('examplefile.pdf');

        cy.get('Current Address').type('A5, South Extension Part 1');

        cy.get('#submit').click();


        cy.get('#example-modal-sizes-title-lg').should('be.visible').and('contain', 'Thanks for submitting the form');

        



       

        
    });
});