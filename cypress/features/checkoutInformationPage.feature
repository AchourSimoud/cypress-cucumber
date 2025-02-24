Feature: Saisie des informations de checkout

  Scenario: Compléter les informations de checkout
    Given L utilisateur a des produits dans son panier
    When Il clique sur "Checkout"
    And Il saisit son prenom "prenom", nom "nom" et code postal "75000" et clique sur continue
    Then Il passe a l etape suivante
