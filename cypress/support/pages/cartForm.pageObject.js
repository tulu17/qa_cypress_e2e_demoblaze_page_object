import PageObject from '../PageObject';

class CartFormPageObject extends PageObject {
  url = '/cart.html';

  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get creditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country, { force: true });
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCreditCard(creditCard) {
    this.creditCardField.type(creditCard);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }
}

export default CartFormPageObject;
