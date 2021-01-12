class basePage {
    constructor() {

        // Selectors
        this.profilePhoto = 'span._2dbep.qNELH'
        this.searchBox = 'input[type="text"]'
        this.listInSearchBox = '.yCE8d'
        this.clearSearchButton = '.aIYm8.coreSpriteSearchClear'
        
        // Label
        this.profileLabel = 'Profile'
        this.savedLabel = 'Saved'
        this.settingsLabel = 'Settings'
        this.logoutLabel = 'Log Out'
    }

    logout(){

        // click on profile photo and selects Log Out option
        cy.get(this.profilePhoto).click()
        cy.contains(this.logoutLabel).click()

    }
}

export default new basePage();