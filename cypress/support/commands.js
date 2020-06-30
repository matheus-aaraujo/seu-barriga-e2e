

Cypress.Commands.add("cadastrarUsuario", (nome, email, senha) => {
    cy.window().then((win) => {
        if(win.location.href.search(/cadastro/g) != -1) {
            cy.get("#nome").type(nome);
            cy.get("#email").type(email);
            cy.get("#senha").type(senha);
            cy.get("input[value='Cadastrar']").click();

            cy.contains("Novo usuário").click();
        }
        else {
            cy.contains("Novo usuário").click();

            cy.get("#nome").type(nome);
            cy.get("#email").type(email);
            cy.get("#senha").type(senha);
            cy.get("input[value='Cadastrar']").click();
        }
        });
});
