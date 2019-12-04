❯ docker run --name super-livros -e POSTGRES_PASSWORD=123456 -p 5433:5432 -d postgres
❯ yarn sequelize db:migrate
