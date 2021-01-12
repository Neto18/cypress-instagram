/// <reference types="cypress" />
import loginPage from '../pages/loginPage';
import basePage from '../pages/basePage';

describe ('Profile Menu Scenarios', () =>{

    beforeEach( ()=> {

        // Log in and check the page label
        cy.visit('/')
        cy.get('h1').should('contain', loginPage.mainPageLabel)
        loginPage.login()

    })

    afterEach ( ()=>{

        // Log out and confirm is on the login page
        basePage.logout()
        cy.get('h1').should('contain', loginPage.mainPageLabel)

    })

    // Selectors and labels
    const profileNameSelector = 'h1'
    const profileNameLabel = 'Ernesto TEST Account'
    const savedLabel = `Only you can see what you've saved`
    const changeProfoleSelector = 'button[type=button]'
    const changeProfileLabel = 'Change Profile Photo'
    const profileUrl = '/netodrive18/' 
    const savedUrl= '/netodrive18/saved/'
    const settingsUrl = '/accounts/edit/'

    it('Go to Profile Menu Option', () =>{
        
        // Select Profile option and check page label
        cy.get(basePage.profilePhoto).click()
        cy.contains(basePage.profileLabel).click()
        cy.get(profileNameSelector).should('contain', profileNameLabel)
        
        // Also check for the expected URL
        cy.url().should('include', profileUrl) 

    })

    it('Go To Saved Menu Option', () => {

        // Select Saved option and check an specific label on the section
        cy.get(basePage.profilePhoto).click()
        cy.contains(basePage.savedLabel).click()
        cy.contains(savedLabel).should('be.visible')

        // Also check for the expected URL
        cy.url().should('include', savedUrl) 

    })

    it('Go To Settings Menu Option', () => {

        // Select Saved option and check an specific label on the section
        cy.get(basePage.profilePhoto).click()
        cy.contains(basePage.settingsLabel).click()
        cy.get(changeProfoleSelector).should('contain', changeProfileLabel)

        // Also check for the expected URL
        cy.url().should('include', settingsUrl) 

    })

})