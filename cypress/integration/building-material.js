import BuildingMaterialPage from "../support/page-objects/building-material-page"
import HomePage from "../support/page-objects/home-page"
import data from "../fixtures/data.json"
import selector from "../fixtures/selectors.json"

describe("Building Material page", () => {
  const buildingMaterialPage = new BuildingMaterialPage()
  const homePage = new HomePage()

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"))
  })

  it("TC5: Customer successfully submits building material", () => {
    homePage.enterZipCode(data.validZip)
    cy.url().should("include", "/building-material")
    buildingMaterialPage.selectMaterial()

    //verify redirection to water-proximity page
    cy.url().should("include", "/water-proximity")
  })

  it("TC6: Customer submits without selecting an option ", () => {
    homePage.enterZipCode(data.validZip)

    buildingMaterialPage.selectMaterial("0")
    //verify the "Next" button is disabled
    cy.get(selector.buildingMat.nextBtn).should("be.disabled")
  })
})
