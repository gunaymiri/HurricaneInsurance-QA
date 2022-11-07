import WaterProximityPage from "../support/page-objects/water-proximity-page"
import BuildingMaterialPage from "../support/page-objects/building-material-page"
import HomePage from "..//support/page-objects/home-page"
import data from "../fixtures/data.json"
import selector from "../fixtures/selectors.json"

describe("Water Proximity page", () => {
  const buildingMaterialPage = new BuildingMaterialPage()
  const homePage = new HomePage()
  const waterProximityPage = new WaterProximityPage()

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"))
  })

  it("TC7: Customer successfully submits water proximity ", () => {
    homePage.enterZipCode(data.validZip)
    cy.url().should("include", "/building-material")
    buildingMaterialPage.selectMaterial()
    cy.url().should("include", "/water-proximity")
    waterProximityPage.selectWaterProximity()

    //verify redirection to the page with quote results
    cy.url().should("include", "/quote")
  })

  it("TC8: Customer submits without selecting an option ", () => {
    homePage.enterZipCode(data.validZip)
    cy.url().should("include", "/building-material")
    buildingMaterialPage.selectMaterial()
    cy.url().should("include", "/water-proximity")
    waterProximityPage.selectWaterProximity("0")

    //verify "Next" button is disabled
    cy.get(selector.waterProximity.nextBtn).should("be.disabled")
  })
})
