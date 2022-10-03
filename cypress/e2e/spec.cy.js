describe("fetch api", () => {
  it("fetch products", () => {
    // Get Request
    // cy.request("products").as("fetchProducts");
    // cy.get("@fetchProducts").should((response) => {
    //   console.log(response);
    //   expect(response.status).eq(200);
    //   expect(response.statusText).eq("OK");
    //   expect(response).to.have.property("body");
    // });

    // Post Request
    cy.request("POST", "products", {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }).as("postProduct");
    cy.get("@postProduct").should((response) => {
      console.log(response);
      let newPrice = response.body.price * 10000;
      expect(newPrice).to.be.eq(15000);
    });
  });
});
