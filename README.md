# nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## set production mode

in the package.json

```js
"scripts": {
    "start": "HOST=0.0.0.0 PORT=80 nuxt start",
  },
```

Specify HOST=0.0.0.0 PORT=80 



## docker 

Build the image 

```bash

docker build -t antoine/nuxt . --force-rm

```

Run the production mode

```bash

docker-compose up d 

```


If issues when docker-compose up 

```
docker-compose rm --all
```

NB : This will only afect the "internal" docker-compose 


