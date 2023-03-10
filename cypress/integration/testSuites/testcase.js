// Cypress test class file -> Spec file

describe('Test Suite: 2', () => {

  before('Setup Environment',()=>
  {
    cy.log('This is a before all: It runs once before starting the execution of first test.')
  })

  after('Close all instances',()=>
  {
    cy.log('This is a after all: It runs once after completion of all the tests.')
  })

  beforeEach('Visit base URL', ()=>
  {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  })

    it('This is a sample test case 1', () => {
      expect(true).to.equal(true)
    })

    it('This is a sample test case 2', () => {
        expect(true).to.equal(true)
      })

      it('This is a sample test case 3', () => {
        expect(true).to.equal(true)
      })

      it('This is a sample test case 4',()=>
      {
        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('Brocolli')
        cy.get('.search-button').click()
        cy.get(':nth-child(1) > .stepper-input > .increment').click()
        cy.get('.product-action > button').click()
      })

      it('Validate product count',()=>
      {
        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.search-button').click()
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
      })

      it('Validate product count',()=>
      {
        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.search-button').click()
        cy.wait(2000)
      //  cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
      })

      it('Click on Add to Cart',()=>
      {
        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.search-button').click()
        cy.wait(2000)

      //  Use of cy.get and find functions
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
      })

      it('Add product to Cart',()=>
      {
        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.search-button').click()
        cy.wait(2000)

        // Loop: for each Loop
        cy.get('.products').find('.product').each(($ele, index, $list) => {
          const product_name = $ele.find('.product-name').text()
          if(product_name.includes('Carrot'))
          {
            cy.wrap($ele).find('button').click()
            $ele.find('button').click() 
          }
        })      
      })

      // use of then keyword
      it('Use of then keyword', () => {
        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        /* const logo = cy.get('.brand')
        const logoText = logo.text() */
        
        cy.get('.brand').then(function(eleLogo)
        {
          const logoText = eleLogo.text()
          cy.log(logoText)
        })
        cy.get('.brand').should('have.text','GREENKART')
      })

      it('Cypress alias', ()=>
      {
        cy.get('.search-keyword').as('searchBox')

        cy.get('@searchBox').type('Brocolli')
        cy.wait(2000)
        cy.get('@searchBox').clear()
        
        cy.get('@searchBox').type('Cauliflower')
        cy.wait(2000)
        cy.get('@searchBox').clear()
        
        cy.get('@searchBox').type('Beans')
        cy.wait(2000)
        cy.get('@searchBox').clear()
        

        cy.get('@searchBox').type('Pumpkin')
        cy.wait(2000)
        cy.get('@searchBox').clear()
      })

      it('Handle validations', ()=>
      {
        // create alias for searchBox
        cy.get('.search-keyword').as('searchBox')
        // enter text in search box
        cy.get('@searchBox').type('Brocolli')
        cy.wait(2000)

        // click on add to cart button
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()

        // click on cart
        cy.get('.cart-icon > img').click()

        // click on proceed to checkout button
        cy.get('.cart-preview > .action-block > button').click()
        

      })



      



  })

