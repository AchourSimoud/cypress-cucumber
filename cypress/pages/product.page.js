
class ProductsPage {
    elements = {
      productTitle: () => cy.get(".inventory_item_name"),
      productPrice: () => cy.get(".inventory_item_price"),
      productImg: () => cy.get(".inventory_item_img"),
      productDesc: () => cy.get(".inventory_item_desc"),

  
      addToCartButton: () => cy.get(".btn_inventory"),
      cartNumbre: () => cy.get(".shopping_cart_badge"),
      cartIcon: () => cy.get(".shopping_cart_link"),
      sortDropdown: () => cy.get(".product_sort_container"),
      ajouterAuPanierBouton: (nomProduit) => cy.get(`[data-test="add-to-cart-${nomProduit}"]`),//sélecteur dynam pour trouver le bouton d’un produit spécif
      retirerDuPanierBouton: (nomProduit) => cy.get(`[data-test="remove-${nomProduit}"]`),
    };

  cliquerSurProduit(nomProduit) {
    this.elements.productTitle().contains(nomProduit).click();
  }

   ajouterProduitAuPanier(nomProduit) {
    this.elements.ajouterAuPanierBouton(nomProduit).click();
  }
 
  retirerProduitDuPanier(nomProduit) {
    this.elements.retirerDuPanierBouton(nomProduit).click();
  }

  verifierProduitAjoute() {
    this.elements.cartNumber().should("be.visible");
  }

  allerAuPanier() {
    this.elements.cartIcon().click();
  }

  selectionnerTriPar(valeur) {
    this.elements.sortDropdown().select(valeur);
  }
 
  verifierTriSelectionne(valeur) {
    this.elements.sortDropdown().should("have.value", valeur);
  }
  recuperationListTitreProduit(){
    this.elements.productTitle();
  }

  verifiercontenudesproduit ( ){
  
    this.elements.productTitle().should("be.visible");
    this.elements.productPrice().should("be.visible");
    this.elements.productDesc().should("be.visible");
    this.elements.productImg().should("be.visible");
  }

}
export default new ProductsPage();


