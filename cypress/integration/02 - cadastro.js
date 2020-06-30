import faker from "faker-br";

const nomeCadastro = faker.name.findName();
const emailCadastro = faker.internet.email();
const senhaCadastro = faker.internet.password();

describe("Cadastro de usuário", () => {
  before(() => {
    cy.visit("https://seubarriga.wcaquino.me/login");
  });

  beforeEach(() => {
    cy.contains("Novo usuário").click();
  });

  it("Fazer cadastro de usuário com dados válidos", () => {
    cy.get("#nome").type(nomeCadastro);
    cy.get("#email").type(emailCadastro);
    cy.get("#senha").type(senhaCadastro);
    cy.get("input[value='Cadastrar']").click();

    cy.get("div[role='alert']").should(($div) => {
      expect($div).to.contain("Usuário inserido com sucesso");
    });
  });

  it("Fazer cadastro de um usuário sem preencher os campos obrigatórios", () => {
    cy.get("input[value='Cadastrar']").click();

    cy.get("div[role='alert']").should(($div) => {
      expect($div).to.contain("Nome é um campo obrigatório");
      expect($div).to.contain("Email é um campo obrigatório");
      expect($div).to.contain("Senha é um campo obrigatório");
    });
  });

  it("Fazer cadastro de usuário com email inválido", () => {
    cy.get("#nome").type(nomeCadastro);
    cy.get("#email").type("emailCadastro");
    cy.get("#senha").type(senhaCadastro);
    cy.get("input[value='Cadastrar']").click();

    cy.get("div[role='alert']").should(($div) => {
      expect($div).to.not.contain("Usuário inserido com sucesso");
    });
  });

  it("Fazer o cadastro de um usuário já existente", () => {
    cy.cadastrarUsuario(nomeCadastro, emailCadastro, senhaCadastro);

    cy.get("#nome").type(nomeCadastro);
    cy.get("#email").type(emailCadastro);
    cy.get("#senha").type(senhaCadastro);
    cy.get("input[value='Cadastrar']").click();

    cy.get("div[role='alert']").should(($div) => {
      expect($div).to.contain("Endereço de email já utilizado");
    });
  });
});
