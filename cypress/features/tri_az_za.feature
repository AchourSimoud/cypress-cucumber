Feature: Tri des produits sur la page d'accueil

  Scenario: L utilisateur trie les produits par ordre alphabetique croissant
    Given L utilisateur est sur la page d accueil
    When Il selectionne "az" dans le menu de tri
    Then Les produits sont tries dans l ordre alphabetique

  Scenario: L utilisateur trie les produits par ordre alphabetique decroissant
    Given L utilisateur est sur la page d accueil
    When Il selectionne "za" dans le menu de tri
    Then Les produits sont tries dans l ordre alphabetique inverse
