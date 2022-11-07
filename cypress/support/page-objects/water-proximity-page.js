import selector from "../../fixtures/selectors.json"

class WaterProximityPage {
  selectWaterProximity(option) {
    cy.selectRandomOption(option, selector.common.optionSelection)

    //click on "Next" button
    cy.get(selector.waterProximity.nextBtn).click()
  }
}

export default WaterProximityPage
