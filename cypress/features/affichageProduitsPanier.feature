Feature: Affichage des produits dans le panier

  Background: 
    Given je suis sur la page produits 

  Scenario: la description du produit ajoute est affichee
    When je mets dans le panier le produit "Sauce Labs Backpack"
    And je clique sur le bouton panier
    Then je retrouve le produit avec sa description dans le panier


    
