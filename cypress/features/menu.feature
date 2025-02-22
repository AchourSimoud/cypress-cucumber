Feature: test du menu latéral

    Background: 
        Given je suis sur la page produits

    Scenario: Affichage du menu
        When je clique sur le menu
        Then le menu est affiche

    Scenario: Revenir vers la page produits
        When je clique sur le bouton panier
        And je clique sur le menu
        And je clique sur le bouton All Items
        Then la page produits est affichee
    
    Scenario: Aller vers la page About
        When je clique sur le menu
        And je clique sur le bouton About
        Then la page about est affichee
    
    Scenario: Se deconnecté 
        When je clique sur le menu
        And je clique sur le bouton Logout
        Then l utilisateur est sur la page de connexion "https://www.saucedemo.com/"
    
    Scenario: Réintialisation des boutons Remove
        When je clique sur un bouton add to cart pour "2" produits
        And je clique sur le menu
        And je clique sur le bouton Reset App State
        Then les boutons Remove sont reinitialises
    
    Scenario: Réintialisation des produits dans le panier
        When je clique sur un bouton add to cart pour "2" produits
        And je clique sur le menu
        And je clique sur le bouton Reset App State
        Then le nombre des produits dans le panier est reinitialise

  