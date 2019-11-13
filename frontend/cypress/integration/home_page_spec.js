// Oslo has to be the most popular place for this to work...

describe("The Home Page", function() {
  beforeEach(() => {
    cy.visit("/");
  });
  it("successfully loads", function() {
    cy.visit("/"); // change URL to match your dev URL
  });

  it("contains header", function() {
    cy.contains("Dream destination");
  });

  it("contains five most popular", function() {
    cy.contains("five most popular");
    cy.contains("trondheim");
    cy.contains("canberra");
  });

  it("card routes to detailed card", () => {
    cy.contains("Trondheim").click();
    cy.contains("third");
  });
});
