/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import productPage from "../pages/product.page";
import detaillePage from "../pages/detaille.page";




Then('je retrouve le produit avec sa description son prix son image dans le detaille prodiot', () => {

    let expectedPrice = Cypress.env("addedProductPrice");
    let expectedDesc = Cypress.env("addedProductDesc");
    let expectedImage = Cypress.env("addedProductimage");

    detaillePage.elements.detailleproductdesc()
        .invoke("text")
        .then((descText) => {
            cy.wrap(descText.trim()).should("equal", expectedDesc);
        });

    detaillePage.elements.detailleproductprice()
        .invoke("text")
        .then((priceText) => {
            cy.wrap(priceText.trim()).should("equal", expectedPrice);
        });

    detaillePage.elements.detailleproductimg()
        .invoke("attr", "src")
        .then((imageSrc) => {
            cy.wrap(imageSrc).should("equal", expectedImage);
        });

})

When('je clique sur un produit {string}', (produit) => {
    
    productPage.getProductDescription(produit).then((desc) => {
        Cypress.env("addedProductDesc", desc);
    });
    productPage.getProductPrice(produit).then((price) => {
        Cypress.env("addedProductPrice", price);
    });
    productPage.getProductImage(produit).then((image) => {
        Cypress.env("addedProductimage", image);
    }
    

);
    productPage.cliquerSurProduit(produit);})

Given('je suis sur la page produits&#39;', () => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.login("standard_user", "secret_sauce");
})
