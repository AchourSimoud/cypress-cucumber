Feature: Navigation vers la page About

  Scenario: L'utilisateur accède à la page About depuis le menu
    Given L utilisateur est sur la page d accueil
    When Il clique sur le lien "About"
    Then Il est redirigé vers la page About
    And Le contenu de la page About est affiché correctement
