# Tech Challenge Fast Food System

Projeto da Pós Graduação da FIAP - Arquitetura de Software

### Pré-requisitos

```
docker
docker compose
```

### IMPORTANTE

```
Na primeira vez que subir, o container da aplicacao vai apresentar erros de conexao
com o banco de dados porque vai ser a primeira vez que o banco sobe e demora um pouco, por favor
aguardar uns 2 a 3 minutinhos para tentar acessar aplicacao via swagger
```

### Swagger

```
Rodando Direto: http://localhost:3000/docs
Rodando com Kubernates: http://localhost:30000/docs
```

### Collection Postman

```
Para facilitar segue a collection do postman no arquivo:
FastFoodSystem-FIAP.postman_collection.json
```

### Execução Windows

```
docker compose -f "docker-compose.yml" up -d --build
```

### Execução linux/mac

```
sudo docker compose -f "docker-compose.yml" up -d --build
```

### Execução Windows

### Kubernetes

```
Para rodar no windows execute o seguinte comando no terminal:
.\up.bat

Para rodar no MAC/LINUX execute o seguinte comando no terminal:
sh up.sh

*Observação tem que estar na pasta raiz do projeto

No terminal rodar:
Kubectl get pods, para verificar se os pods foram iniciados após isso no navegador ir: http:localhost:30000/docs abrirá a pagina do swagger

Observa que as imagens leva um tempo para ser criada.

```

- [TypeScript](https://www.typescriptlang.org)
- [Docker](https://www.docker.com)
- [Azure](https://azure.microsoft.com/pt-br/products/mysql)
- [MySQL](https://www.mysql.com)
