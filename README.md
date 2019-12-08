# Super Livros Back-end

## Como rodar

Tendo o `node`, `docker` e o gerenciador de pacote `npm` ou `yarn` basta realizar poucos passos.

`docker run --name super-livros -e POSTGRES_PASSWORD=123456 -p 5433:5432 -d postgres`
Esse comando sobe um container docker do postgres com senha padrão `123456` e na porta `5433` (porta diferente para nao gerar conflitos de porta caso ja tenha um postgres na maquina).

`yarn ou npm install`

Para instalar todas as dependencias

👍
