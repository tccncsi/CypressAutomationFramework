
class homePage
{
    // create functions to return locators of page

    getPersonName()
    {
        return  cy.get(':nth-child(1) > .form-control')
    }

    getEmailId()
    {
        return cy.get(':nth-child(2) > .form-control')
    }

    getPassword()
    {
        return cy.get('#exampleInputPassword1')
    }

    getCheckbox()
    {
        return cy.get('#exampleCheck1')
    }

    getRadiobutton()
    {
        return cy.get('#inlineRadio2')
    }

    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }

    getDateOfBirth()
    {
        return cy.get(':nth-child(8) > .form-control')
    }

    getCheckOut()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}

// to use this class properties into another class
export default homePage;