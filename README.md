# mexp
## express server with mongodb atlas client

A simple express server with get and get with /:id REST endpoints

```
 npm install express mongodb
```

for development

```
npm install dotenv nodemon --save-dev
```

declare your atlas uri in .env as

```
MONGO_URL=[your uri]
```

run server with
```
npm run devs
```

listens to REST API calls on port 3000 of localhost
