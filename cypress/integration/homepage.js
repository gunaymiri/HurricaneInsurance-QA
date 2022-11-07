import HomePage from "../support/page-objects/home-page"
import data from "../fixtures/data.json"
import selector from "../fixtures/selectors.json"

describe("Homepage", () => {
  const homePage = new HomePage()

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"))
  })

  it("TC1: Customer sees a landing page responsive for desktop device", () => {
    homePage.landingPage()
  })

  it("TC2: Customer enters valid zip code", () => {
    homePage.enterZipCode(data.validZip)

    //verify to be redirected to the building materials page
    cy.url().should("include", "/building-material")
  })

  it("TC3: Customer submits blank zip code field", () => {
    homePage.enterZipCode()

    //should get a validation message "Required"
    cy.get(selector.homepage.zipValidationMessage).should("have.text", "Required")
  })

  it("TC4: Customer submits invalid zip code", () => {
    homePage.enterZipCode(data.invalidZip)

    //Should get a validation message("Invalid zip code")
    cy.get(selector.homepage.zipValidationMessage).should("have.text", "Invalid zip code")
  })
})
