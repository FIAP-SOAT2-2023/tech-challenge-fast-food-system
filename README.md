# Tech Challenge Fast Food System

Projeto da Pós Graduação da FIAP - Arquitetura de Software

### Pré-requisitos
```
docker
docker compose
```

### Execução Windows
```
docker compose up -d --build
```

### Execução linux/mac
```
sudo docker compose up -d --build
```

### Tecnologias utilizadas

* [TypeScript](https://www.typescriptlang.org/)
* [Docker](https://www.docker.com/)
* [Azure](https://azure.microsoft.com/pt-br/products/mysql)

### Swagger
```
http://localhost:3000/docs
```

# caso de problema para subir a imagem pelo compose, rode o cmoando abaixo para gerar uma imagem em paralelo 
### buildar imagem docker
```
sudo docker build -t fastfood-service . && sudo docker run --network=host -p 80:80 fastfood-service
```
