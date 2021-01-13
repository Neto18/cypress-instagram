class loginPage {
    constructor() {

        // Selectors
        this.userName = 'input[name=username]'
        this.passWord = 'input[name=password]'
        this.loginButton = 'button[type=submit]'
        this.saveLogin = '.olLwo'
        this.wrongPass = '#slfErrorAlert'

        // Credentials
        this.user = 'netomunozdrive@gmail.com'
        this.pass = 'T35t$p@ss'
        this.fakePass = '$%wrong123!'

        // Labels
        this.mainPageLabel = 'Instagram'
        this.saveLoginLabel = 'Save Your Login Info?'
        this.notNowLabel = 'Not Now'
        this.landingPageLabel = 'Getting Started'
        this.expectedLandingURL = 'www.instagram.com'
        this.wrongPassText = 'Sorry, your password was incorrect. Please double-check your password.'

    }

    login(){
        // enter valid credentials and click on login
        cy.get(this.userName).type(this.user)
        cy.get(this.passWord).type(this.pass)
        cy.get(this.loginButton).click()

        // check label and select NO on options
        cy.get(this.saveLogin).should('contain', this.saveLoginLabel)
        cy.contains(this.notNowLabel).click()
        cy.contains(this.notNowLabel).click()

        // verify URL on landing page
        cy.url().should('include', this.expectedLandingURL)
    }
}

export default new loginPage();