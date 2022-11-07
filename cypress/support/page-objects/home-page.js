import selector from "../../fixtures/selectors.json"

class HomePage {
  landingPage() {
    cy.get(selector.homepage.pageHeader).should("have.text", "Hurricane Insurance")
  }

  enterZipCode(zip) {
    if (zip) {
      cy.get(selector.homepage.zipInput).type(zip)
    }

    //click on "Get a Quote" button
    cy.get(selector.homepage.getQuoteBtn).click()
  }
}

export default HomePage
