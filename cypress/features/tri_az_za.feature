Feature: Tri des produits par nom
  Scenario: Trier les produits de A a Z
    Given L utilisateur est sur la page d accueil
    When Il sélectionne "Name (A to Z)" dans le menu de tri
    Then Les produits sont tries dans l ordre alphabétique

  Scenario: Trier les produits de Z à A
    Given L utilisateur est sur la page d accueil
    When Il selectionne "Name (Z to A)" dans le menu de tri
    Then Les produits sont tries dans l ordre alphabetique inverse