import selector from "../../fixtures/selectors.json"

class BuildingMaterialPage {
  selectMaterial(option) {
    cy.selectRandomOption(option, selector.common.optionSelection)

    //click on "Next" button
    cy.get(selector.buildingMat.nextBtn).click()
  }
}

export default BuildingMaterialPage
