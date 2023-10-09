# Frontend CRUD Reprograma


> Projeto criado para vivenciarmos a criação de uma aplicação

[Trello do projeto](https://trello.com/invite/b/KLJ0xJLh/ATTI3116cadd62a65f361d348fd575b5cf9b18BEC285/conectadas-reprograma-crud)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de `<Node.Js />`.
* Você definiu o tema da sua aplicação
* Link para o modelo no figma [FIGMA EXEMPLO](https://www.figma.com/file/JbhdNDvjI7S0Fbb34DFPzR/Projeto-Conectadas-Reprograma?type=design&node-id=0%3A1&mode=design&t=b6SmyijF1mNMHEA0-1)

## 🚀 Instalando `<Frontend CRUD Reprograma>`

Para instalar o `<Frontend CRUD Reprograma>`, siga estas etapas:

Faça um fork da aplicação em:
```
https://github.com/JulianePires/frontend-crud-reprograma-conectadas.git
```
Depois de clonado o projeto, no terminal do seu VSCode, digite 
```
npm install
```
para instalar as dependências.

## ☕ Usando `<Frontend CRUD Reprograma>`

Para usar `<Frontend CRUD Reprograma>`, siga estas etapas:

Copie o conteúdo do exemplo de .env com o comando:
```
cp .env.example .env
```

Preencha com o link do backend da sua aplicação

Existem TODO's espalhados pela aplicação, cumpra-os.

Aqui estão algumas coisas que precisamos desenvolver:

-  Criar o conteúdo das páginas
-  Criar componentes
-  Modificar arquivos com cores, fontes, ícones, imagens e rotas adequadas ao seu projeto
-  Criar estilos
-  Adicionar regras de negócio ao contexto

Rodar a aplicação:
```
npm run dev
```

A api terá os os endpoints:
 * http://localhost:8080/ METHOD GET => mostra todos os objetos listados no banco de dados.
 * http://localhost:8080/:id METHOD GET => mostra um objeto específico.
 * http://localhost:8080/submit METHOD POST => cadastra um nova objeto.
 * http://localhost:8080/edit/:id METHOD PUT => altera um objeto já cadastrado.
 * http://localhost:8080/delete/:id METHOD DELETE => apaga um objeto pré-cadastrado.
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/JulianePires.png" width="100px;" alt="Foto da Pessoa no GitHub"/><br>
        <sub>
          <b>Juliane Pires</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.