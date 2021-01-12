/// <reference types="cypress" />
import loginPage from '../pages/loginPage';
import loginPage from '../pages/basePage';
import basePage from '../pages/basePage';

describe ('Login Process for Instagram', () =>{

    beforeEach( ()=> {
        
        // Log in and check the page label
        cy.visit('/')
        cy.get('h1').should('contain', loginPage.mainPageLabel)

    })

    after ( ()=>{
        
        // Log out and confirm is on the login page
        basePage.logout()
        cy.get('h1').should('contain', loginPage.mainPageLabel)
        
    })

    it('Check Login button is disabled if the password is missing', () =>{

        // Enter the username y chekcs the login button
        cy.get(loginPage.userName).type(loginPage.user)
        cy.get(loginPage.loginButton).should('be.disabled')

    })

    it('Check Login button is disabled if the username is missing', () =>{

        // Enter the username y chekcs the login button
        cy.get(loginPage.passWord).type(loginPage.pass)
        cy.get(loginPage.loginButton).should('be.disabled')

    })

    it('Check Unsuccessful login - Wrong password', () => {

        // Enter valid credentials and click on login
        cy.get(loginPage.userName).type(loginPage.user)
        cy.get(loginPage.passWord).type(loginPage.fakePass)
        cy.get(loginPage.loginButton).click()

        // Check message 
        cy.get(loginPage.wrongPass).should('contain', loginPage.wrongPassText)

    })

    it('Check Successful login with valid credentials', () => {

        // Enter valid credentials and click on login
        cy.get(loginPage.userName).type(loginPage.user)
        cy.get(loginPage.passWord).type(loginPage.pass)
        cy.get(loginPage.loginButton).click()

        // Check label and select NO on options
        cy.get(loginPage.saveLogin).should('contain', loginPage.saveLoginLabel)
        cy.contains(loginPage.notNowLabel).click()
        cy.contains(loginPage.notNowLabel).click()

        // Verify label on landing page
        cy.get('div').should('contain', loginPage.landingPageLabel)
    })

})