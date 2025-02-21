/// <reference types="cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";
import productPage from "../pages/product.page";
import cartPage from "../pages/cart.page";

Then('je retrouve le produit avec sa description dans le panier', () => {
    cartPage.elements.productsDescriptions().should("deep.equal", Cypress.env("addedProductDesc"));
})

When('je mets dans le panier le produit {string}', (s) => {
    productPage.ajouterProduitAuPanier(s.toLowerCase().replace(/\s+/g, "-"));
    Cypress.env("addedProductDesc", productPage.getProductDescription(s));
})
