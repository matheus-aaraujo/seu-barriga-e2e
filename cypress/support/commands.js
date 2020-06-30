

Cypress.Commands.add("cadastrarUsuario", (nome, email, senha) => {
    cy.request("POST", `https://seubarriga.wcaquino.me/cadastrarUsuario?nome=${nome}&email=${email}&senha=${senha}`)
    .then((res) => {
        expect(res.status).to.eq(200);
    });
});
