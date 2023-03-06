
// import page class to access locator methods
import homePage from "../pageObjects/homePage";

describe('Test Suite: Cypress Baseline Framework', () => {
    // declare a variable for test data
    let personDetails;
    let mobileDetails;
    let configDetails;

    before(function(){

        // read all the required data from JSON file and create objects for reuse
        cy.fixture('/testdata/userDetails').then(function(testdata)
        {
            personDetails = testdata
        })

        cy.fixture('/testdata/mobileDetails').then(function(testdata)
        {
           mobileDetails = testdata
        })

        cy.fixture('/configuration/config').then(function(testdata)
        {
           configDetails = testdata
        })


    })

    beforeEach('Visit to base url', ()=>
    {
        // normal command to visit a url
        //cy.visit('https://rahulshettyacademy.com/angularpractice/')

        // setup environmental variable for url
        cy.visit(Cypress.env('url'))
    })

    // Test case with hard coded test data
    it('Fill the form using hard coded data', ()=>{
        cy.get(':nth-child(1) > .form-control').type('Shivaji Dhumal')
        cy.get(':nth-child(2) > .form-control').type('shivaji.dhumal@mail.com')
        cy.get('#exampleInputPassword1').type('Qwerty@123')
        cy.get('#exampleCheck1').click()
        cy.get('#exampleFormControlSelect1').select('Male')
        cy.get('#inlineRadio2').click()
        cy.get(':nth-child(8) > .form-control').type('1989-01-12')
    })

    // Test case with dynamic test data from JSON file
    it('Fill the form using test data from Json file', ()=>{

        // create object of a page class and access the locator methods
        const homepage = new homePage()

        // below are the methods which retun the locators
        homepage.getPersonName().type(personDetails.name)
        homepage.getEmailId().type(personDetails.email)
        homepage.getPassword().type(personDetails.password)
        homepage.getCheckbox().click()
        homepage.getGender().select(personDetails.gender)
        homepage.getRadiobutton().click()
        homepage.getDateOfBirth().type(personDetails.dateOfBirth)
    })

    // Assertions for Validation
    it('Validate text box value', ()=>{
        // Validate text box value
        cy.get(':nth-child(1) > .form-control').type(personDetails.name)
        cy.wait(2000)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',personDetails.name)

        // Validate element attribute value 
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')

        // Validate checkbox is disabled
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('#inlineRadio3').should('be.visible')
    }) 

    it('Mobile shopping using JSON data', ()=>{
        
        // click on Shop menu
        cy.get(':nth-child(2) > .nav-link').click()

        // check for respective mobile model and add to cart
        cy.get('.card-title > a').each(($ele, $index, $list) =>{
            if($ele.text().includes(mobileDetails.product1))
            {
                cy.get('.card-footer > .btn').eq($index).click()
            }
        })

        // click on Checkout button
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

        cy.get('h4.media-heading > a').should('have.text',mobileDetails.product1)
    })

    it('Mobile shopping using parameterized method', ()=>{

        // click on Shop menu
        cy.get(':nth-child(2) > .nav-link').click()

        // created method to select productName and add to cart
        cy.selectProduct(mobileDetails.product1)
        cy.selectProduct(mobileDetails.product2)
    })

    it('parameterized Test case sample 1', ()=>{

        // define timeout at test case level
        Cypress.config('defaultCommandTimeout',8000)
        
        // click on Shop menu
        cy.get(':nth-child(2) > .nav-link').click()

        // reading JSON array and passed to the function
        mobileDetails.products.forEach(element => {
            cy.selectProduct(element)
        });

        // click on Checkout button
        const homepage = new homePage()
        homepage.getCheckOut().click()

        cy.get(':nth-child(6) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').should('be.visible').click()

        // To click on the element which are overlapped by another element use {force:true} while click
        cy.get('#checkbox2').click({force: true})
        
        cy.get('.ng-pristine > .btn').click()
        // below line will give error due to some extra text in the actual message.
        // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

        cy.get('.alert').then(function(element){
            const actualText = element.text()

            // add assertion to check actual text and expected text
            expect(actualText.includes('Successss!')).to.be.true
        })  
    })

    it('This is Failed Testcase example', ()=>{
        console.log('Failed testcase example for dashboard.')
        assert.equal(true, false, "Failed Testcase");
    })











})