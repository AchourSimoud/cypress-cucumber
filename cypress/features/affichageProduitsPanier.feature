@tc-007
Feature: Affichage des produits dans le panier

  Background: 
    Given je suis sur la page produits 
    When je mets dans le panier le produit "Sauce Labs Backpack"
    And je clique sur le bouton panier

  Scenario: verifier que le produit ajouté contient une description
    Then je retrouve le produit avec sa description dans le panier
  
  Scenario: verifier que le produit ajouté contient un bouton Remove
    Then le produit contient un bouton Remove


    
