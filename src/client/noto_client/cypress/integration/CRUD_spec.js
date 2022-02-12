describe("CRUD", () => {
  it("Add new note", () => {
    cy.visit("http://localhost:3000/new");
    cy.get('input[name="title"]').type("Example Title");
    cy.get('input[name="tag"]').type("JavaScript");
    cy.get('textarea[name="description"]').type("Example Description");
    cy.get('textarea[name="code"]').type('console.log("Hello World!")');
    cy.get("form").submit();
    cy.on("uncaught:exception", () => false);
  });

  it("Edit note", () => {
    cy.visit("http://localhost:3000/");
    cy.get('button[aria-label="Edit note"]').click();
    cy.get('input[name="title"]').type(" EDITED");
    cy.get('textarea[name="description"]').type("EDITED");
    cy.get('textarea[name="code"]').type("EDITED");
    cy.get("form").submit();
    cy.on("uncaught:exception", () => false);
  });

  it("Delete note", () => {
    cy.visit("http://localhost:3000/");
    cy.get('button[aria-label="Delete note"]').click();
  });
});
