/// <reference types="cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";
import productPage from "../pages/product.page";
import cartPage from "../pages/cart.page";

Then('je retrouve le produit avec sa description dans le panier', () => {
    cartPage.elements.productsDescriptions().invoke("text")
    .should("deep.equal", Cypress.env("addedProductDesc"));
     
})

When('je mets dans le panier le produit {string}', (s) => {
    productPage.ajouterProduitAuPanier(s.toLowerCase().replace(/\s+/g, "-"));
    productPage.getProductDescription(s).then((desc)=>{
        Cypress.env("addedProductDesc",desc);
    });
})

Then('le produit contient un bouton Remove', () => {
    cartPage.elements.removeButton().should("be.visible");
})

