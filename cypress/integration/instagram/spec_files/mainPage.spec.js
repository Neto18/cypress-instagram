/// <reference types="cypress" />
import loginPage from '../pages/loginPage';
import basePage from '../pages/basePage';

describe ('Main Page Scenarios', () =>{

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

    // Selectors and Labels 
    const accountToSearch = 'Ernesto Muñoz Barquero'
    const profileNameSelector = '.rhpdm'
    const profilePicSelector = '.v1Nh3.kIKUG._bz0w'
    const likeButtonSelector = 'button > div > span > svg'
    const likeCounterSelector = 'section > div > div > a > span'
    const closePhotoModal = '.QBdPU' // should use last
    const commentFieldSelector = '.Ypffh'
    const testComment = 'This is a test comment'
    const postButtonSelector = 'button[type="submit"]'
    const commentOptionsSelector = 'svg[aria-label="Comment Options"]'
    const deleteCommentSelector = '.aOOlW.-Cab_' // should use second

    it('Basic Search of an account', () =>{

        // Go to search and enter the value
        cy.get(basePage.searchBox).click({force: true}).type(accountToSearch)
        cy.get(basePage.listInSearchBox).first().click()
        cy.get(basePage.clearSearchButton).click()

        // Check the account Name is the expected
        cy.get(profileNameSelector).should('contain', accountToSearch)

    })

    context('Interact with posts', () => {

        beforeEach ( ()=> {

            // Go to search and enter the value
            cy.get(basePage.searchBox).click({force: true}).type(accountToSearch)
            cy.get(basePage.listInSearchBox).first().click()
            cy.get(basePage.clearSearchButton).click()
    
            // Check the account Name is the expected
            //cy.contains(accountToSearch)
            cy.get(profileNameSelector).should('contain', accountToSearch)

        })

        afterEach ( ()=> {

            // Close the Photo Modal Window
            cy.get(closePhotoModal).last().click()
    
        })

        it('Search and like post', () =>{
    
            // Select the second post 
            cy.get(profilePicSelector).eq(1).click()
    
            // Check the number of likes is different (could decrease if was already liked)
            cy.get(likeCounterSelector).then(($count) => {
    
                // Store the counter's text
                const counterValue = $count.text()
              
                // Like to post
                cy.get(likeButtonSelector).click()
              
                // Compare the number of likes to confirm it's different 
                cy.get(likeCounterSelector).should(($count2) => {
                  expect($count2.text()).not.to.eq(counterValue)
                })
            })
    
        })
    
        it('Search and comment a post', () =>{
    
            // Select the 4th post 
            cy.get(profilePicSelector).eq(3).click()
    
            // Comment of the post
            cy.get(commentFieldSelector).type(testComment)
            cy.get(postButtonSelector).click()
    
            // Confirm comment and delete it
            cy.get('span').should('contain', testComment).as('testComment')
            cy.get(commentOptionsSelector).eq(0).click({force: true})
            cy.get(deleteCommentSelector).eq(1).click()
    
        })

    })

})