import faker from "faker-br";

const nomeAPI = faker.name.findName();
const emailAPI = faker.internet.email();
const senhaAPI = faker.internet.password();

describe("Testes na API de login e cadastro", () => {
    it("Acessar a tela de login", () => {
        cy.request("GET", "https://seubarriga.wcaquino.me/login")
        .its("status")
        .should("eq", 200);
    });

    it("Fazer login com dados válidos", () => {
        cy.request("POST", "https://seubarriga.wcaquino.me/logar?email=teste@seu.barriga&senha=senhaseubarriga")
        .its("status")
        .should("eq", 200);
    });

    it("Cadastrar um usuário", () => {
        cy.request("POST", `https://seubarriga.wcaquino.me/cadastrarUsuario?nome=${nomeAPI}&email=${emailAPI}&senha=${senhaAPI}`)
        .its("status")
        .should("eq", 200);
    });
});