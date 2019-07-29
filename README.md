# Marmita

## Resumo

API para cadastrar marmitas

## Requisitos
* <a href="https://www.docker.com/">Docker</a>
* <a href="https://docs.docker.com/compose/">Docker Compose</a>

## Instalação
```bash
git clone git@github.com:macielportugal/marmita-node.git
cd marmita-node
docker-compose build
docker-compose up -d
```

## Uso
O sistema pode se acessado pela url <a href="http://127.0.0.1:8000">http://127.0.0.1:3333</a> ou por <a href="http://127.0.0.1:3333/api">API</a>.

Para subir a base de dados e o usuário admin rode os comandos abaixo

```bash
docker-compose exec web adonis migration:run
docker-compose exec web adonis seed
```
<br />

### API

#### Marmitas

Login:

```bash
curl -X POST  http://127.0.0.1:3333/api/v1/login/ -H "Content-Type:application/json"  -d '{"email": "admin@admin.com.br", "password": "123456"}'
```


Listagem de Marmitas:

```bash
curl -X GET http://127.0.0.1:3333/api/v1/packed-lunch/
```

Criação de Marmita:

```bash
curl -X POST  http://127.0.0.1:3333/api/v1/packed-lunch/  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU2NDQyMDM4Nn0.jFBqu9XLJse1JEWSUYsFqODMr422Ai9I6rWjVS6OAaw"  -H "Content-Type:application/json"  -d '{"name": "marmita1", "description": "description", "ingredient_list": "ingredient_list", "price": 10.12, "amount": 10, "image": "data:image/png;base64,iVBORw0KGgoAA", "discount": 12}'
```

Atualização de Marmita:

```bash
curl -X PUT  http://127.0.0.1:3333/api/v1/packed-lunch/1/  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU2NDQyMDM4Nn0.jFBqu9XLJse1JEWSUYsFqODMr422Ai9I6rWjVS6OAaw"  -H "Content-Type:application/json"  -d '{"name": "marmita1", "description": "description", "ingredient_list": "ingredient_list", "price": 10.12, "amount": 10, "image": "data:image/png;base64,iVBORw0KGgoAA", "discount": 12}'
```

Remoção de Marmita:

```bash
curl -X DELETE  http://127.0.0.1:3333/api/v1/packed-lunch/8/  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU2NDQyMDM4Nn0.jFBqu9XLJse1JEWSUYsFqODMr422Ai9I6rWjVS6OAaw"
```

### .ENV 

Para teste em ambiente docker é preciso criar o arquivo .env da seguinte maneira

```bash
HOST=0.0.0.0
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=6WZ3B27wWnsVL3bB4ssg3gZrOIjkUTvW
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=123456
DB_DATABASE=marmita
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
```