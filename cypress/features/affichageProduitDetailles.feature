Feature: Affichage du detaille produits
  Scenario: Vérification du detailles des produits
    Given je suis sur la page produits
    When je clique sur un produit "Sauce Labs Backpack"
    Then je retrouve le produit avec sa description son prix son image dans le detaille prodiot

#   Scenario: Vérification du button remove
#     Given L'utilisateur est sur la page d'accueil
#     When  je clique sur un produit 
#     Then La  detaille produits s'affiche
#     And  je clique sur remove 
#     And  le nombre du cart badge decrement 
#     And le button remove devient add 

#   Scenario: Vérification du button add card 
#     Given L'utilisateur est sur la page d'accueil
#     When  je clique sur un produit 
#     Then La  detaille produits s'affiche
#     And  je clique sur add to cart
#     And  le nombre du cart badge increment 
#     And le button add cart  devient remove  

#   Scenario: Vérification du button back to product
#     Given L'utilisateur est sur la page d'accueil
#     When je clique sur un produit 
#     Then La  detaille des produits s'affiche
#     And je clique sur back to product 
#     And la page d'accueil s'affiche