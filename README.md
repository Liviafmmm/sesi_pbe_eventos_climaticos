# Gestão de Eventos Climáticos

Projeto para aulas de back-end, com o objetivo de criar uma API RESTful para gerenciar eventos climáticos, conectando Node.js com MariaDB. O projeto inclui funcionalidades para cadastrar, listar, atualizar e excluir eventos climáticos, bem como autenticação de usuários.

<br><img alt="MER" src="docs/mer_der_conceitual.png">
<br><img alt="DC" src="docs/uml_dc.png">

## Tecnologias utilizadas

- Node.js
- Express.js
- MariaDB (XAMPP)
- VS Code

## Instruções para testar

1. Clonar o repositório.
2. Instalar as dependências com `npm install`.
3. Configurar o banco de dados MariaDB com as tabelas necessárias:
   - Abrir o XAMPP e iniciar o MySQL.
   - Abrir o Shell e acessar o MariaDB com o comando:

   ```bash
   mysql -u root
   ```

   - Executar o arquivo `db/script.sql` para criar e popular o banco de dados.

4. Iniciar o servidor com `npm run dev`.
5. Testar as rotas da API utilizando o Thunder Client, Insomnia ou Postman, conforme especificado no arquivo `src/routes.js`.

## Testes com Thunder Client

<details>
<summary>Listar Usuários</summary>
<img alt="Listar Usuários" src="docs/testes/listar.png">
</details>

<details>
<summary>Cadastrar novo usuário</summary>
<img alt="Cadastrar novo usuário" src="docs/testes/cadastrar.png">
</details>

<details>
<summary>Listar Eventos</summary>
<img alt="Listar Eventos" src="docs/testes/listar.png">
</details>

<details>
<summary>Atualizar evento</summary>
<img alt="Atualizar evento" src="docs/testes/put_atualizar.png">
</details>

<details>
<summary>Atualizar cadastro</summary>
<img alt="Atualizar cadastro" src="docs/testes/atualizar_cadastro.png">
</details>

<details>
<summary>Listar por ID</summary>
<img alt="Listar por ID" src="docs/testes/listar_por_id.png">
</details>

<details>
<summary>Testar por tipo de evento</summary>
<img alt="Testar por tipo" src="docs/testes/teste_por_tipo.png">
</details>

<details>
<summary>Testar por local</summary>
<img alt="Testar por local" src="docs/testes/teste_por_local.png">
</details>

<details>
<summary>Excluir evento</summary>
<img alt="Excluir evento" src="docs/testes/delete.png">
</details>
