// describe('Mobile App Testing', () => {
 
//     beforeEach(() => {
//         cy.viewport('iphone-x');
//         cy.visit('/');
//     });
 
//     it('shows the about page', () => {
//         cy.get('ion-menu-button').click();
//         cy.get('ion-menu-toggle').eq(2).click();
//         cy.contains('Lorem ipsum dolor sit amet');
//     });
 
//     it('shows 4 jewelery products', () => {
//         cy.openMobileProducts();
//         cy.get('ion-card').should('have.length', '20');
//     });
// });

describe('Web App Testing', () => {
 
    it('marks the active page', () => {
        cy.visit('/');
        cy.get('.header ion-button').should('have.length', '4');
        cy.get('.header ion-button').eq(0).should('have.class', 'active-item');
 
        cy.visit('/products');
        cy.get('.header ion-button').eq(1).should('have.class', 'active-item');
 
        cy.visit('/about');
        cy.get('.header ion-button').eq(2).should('have.class', 'active-item');
    });
 
    it('has a blue border when active', () => {
        cy.visit('/');
        cy.get('.header ion-button').eq(0).should('have.css', 'border-bottom', '2px solid rgb(56, 128, 255)');
    });
 
});