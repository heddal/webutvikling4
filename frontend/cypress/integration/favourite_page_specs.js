// Feil ennå. må gå på cy.visit('./') of trykke på seach tabben. her er det ikke url-er vel..?

describe("The Favourite Page", () => {
  it("successfully loads", function() {
    cy.visit("/");
    // trykk på hjertet (under kinda)
    cy.contains("Hjertet eller hva det blir").click();
    cy.contains("Du har ingen favoritter eller noe i den duren");
  });

  it("Set favourite", () => {
    cy.visit("/");
    // trykk på canberra
    // Sett canberra favoritt.
    // trykk ok på alert
    // trykk på hjertet (under kinda)
    cy.contains("Hjertet eller hva det blir").click();
    cy.contains("Favourite");
    cy.contains("Tekst fra canberra");
  });
});
