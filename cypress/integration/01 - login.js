import faker from "faker-br";

const nomeLogin = faker.name.findName();
const emailLogin = faker.internet.email();
const senhaLogin = faker.internet.password();

describe("Login de usuário", () => {
    beforeEach(() => {
        cy.visit("https://seubarriga.wcaquino.me/login");
    });

    it("Fazer login de usuário cadastrado previamente", () => {
        cy.cadastrarUsuario(nomeLogin, emailLogin, senhaLogin);
        cy.get("#email").type(emailLogin);
        cy.get("#senha").type(senhaLogin);
        cy.contains("Entrar").click();

        cy.get("div[role='alert']").should(($div) => {
            expect($div).to.contain(`Bem vindo, ${nomeLogin}!`);
        });
    });

    it("Fazer login com usuário não cadastrado", () => {
        cy.get("#email").type("usuario@nao.cadastrado");
        cy.get("#senha").type("senhausuarionaocadastrado");
        cy.contains("Entrar").click();

        cy.get("div[role='alert']").should(($div) => {
            expect($div).to.contain("Problemas com o login do usuário");
        });
    });

    it("Fazer login com usuário não cadastrado", () => {
        cy.get("#email").type("usuario@nao.cadastrado");
        cy.get("#senha").type("senhausuarionaocadastrado");
        cy.contains("Entrar").click();

        cy.get("div[role='alert']").should(($div) => {
            expect($div).to.contain("Problemas com o login do usuário");
        });
    });

    it("Fazer login com email inválido", () => {
        cy.get("#email").type("emailLogin");
        cy.get("#senha").type("senhaLogin");
        cy.contains("Entrar").click();

        cy.get("div[role='alert']").should(($div) => {
            expect($div).to.not.contain(`Bem vindo, ${nomeLogin}!`);
        });
    });

    it("Fazer login com nome do usuário no campo email", () => {
        cy.get("#email").type(nomeLogin);
        cy.get("#senha").type(senhaLogin);
        cy.contains("Entrar").click();

        cy.get("div[role='alert']").should(($div) => {
            expect($div).to.not.contain(`Bem vindo, ${nomeLogin}!`);
        });
    });

});