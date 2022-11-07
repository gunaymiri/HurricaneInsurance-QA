//Select randopm option
Cypress.Commands.add("selectRandomOption", (option, selector) => {
  if (!option) {
    let arrayLength = ""
    let randomOption = ""

    cy.xpath(selector).then((item) => {
      arrayLength += Cypress.$(item).length
      randomOption = Math.floor(Math.random() * arrayLength)

      cy.xpath(selector).eq(randomOption).click()
    })
  }
})
