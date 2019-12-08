# Super Livros Back-end

## Como rodar

Tendo o `node`, `docker` e o gerenciador de pacote `npm` ou `yarn` basta realizar poucos passos.

Esse comando sobe um container docker do postgres com senha padrão `123456` e na porta `5433` (porta diferente para não gerar conflitos de porta caso ja tenha um postgres na maquina).

```
docker run --name super-livros -e POSTGRES_PASSWORD=123456 -p 5433:5432 -d postgres
```

Para instalar todas as dependencias

```
yarn ou npm install
```

Esse comando roda a migration `books` e seed.

```
yarn init
```

Após todas as configurações feitas, rodar o projeto com o comando abaixo.

```
ỳarn dev
```

back end roda na porta `3334`

## The feature overview

- Buscar livros pelo título, autor ou ISBN; 👍
- Listar livros (título, ISBN, autor, editora, ano); 👍
- Apresentar quantidades de registros encontrados; 👍
- Paginar o resultado da busca; 👍
- Filtrar livros pelo período (ano); 👍
- Visualizar detalhes dos livro (apresentar todos os atributos); 👍
