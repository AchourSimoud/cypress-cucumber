Feature: Affichage des produits
  Scenario: Vérification de l'affichage des produits
    Given L'utilisateur est connecté
    When Il accède à la page d accueil
    Then La liste des produits s affiche
    And Chaque produit possède une image, un nom, une description et un prix