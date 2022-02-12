describe("User Authentication", () => {
  it("login redirect", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("match", /landing/);
  });
  it("login page", () => {
    cy.visit("http://localhost:3000/login");
    cy.Cookies.debug(true);
    cy.url().should("match", /login/);
  });
  it("register page", () => {
    cy.visit("http://localhost:3000/register");
    cy.url().should("match", /register/);
  });
  it("user login", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="email"]').type("jackiechan@gmail.com");
    cy.get('input[name="password"]').type("testtest");
    cy.get("form").submit();
  });
  it("greet user", () => {
    cy.contains("h6", "G'Day Jackie!");
  });
});
