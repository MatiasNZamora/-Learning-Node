
# NodeJS: de cero a experto

Esto fue creado mediante el curso de fernando herrera de Node de 0 a experto.


Dentro del curso haremos varias aplicaciones que van desde aplicaciones de consola, receptores de webhooks, Restful API endpoints, autenticación, web sockets y más, trabajando con TypeScript y patrones de desarrollo que nos ayudarán a escribir código de calidad.

Estos proyectos fueron creados mediante el curso de [Fernando Herrera](https://fernando-herrera.com/) de Node de 0 a experto.


Dentro del curso haremos varias aplicaciones que van desde aplicaciones de consola, receptores de webhooks, Restful API endpoints, autenticación, web sockets y más, trabajando con TypeScript y patrones de desarrollo que nos ayudarán a escribir código de calidad.<br>
Se procedió con toda una nueva forma de trabajar con Node, TypeScript y patrones de diseño de la mano con Clean Code.


## Configuraciones necesarias.

 - [Typescript con Nodemon](https://gist.github.com/MatiasNZamora/662ca715f9712af90b2de8ec239f118d)
 - [Testing con Jest](https://gist.github.com/MatiasNZamora/a4893d4873c43a1fb2c1d9ebd4cbd540)
- [Typescript con Ts-node-dev](https://gist.github.com/MatiasNZamora/16850aed890f85c4687d47a4026aaa9c)



## Puntos que tocamos en el curso:

- Aplicaciones de consola
- Leer y grabar archivos en File System
- Code Execution y Event Loop de Node
- Instalación de paquetes de NPM
- Patrón adaptador para las dependencias
- Clean Architecture
- Domain Driven Design
- Factory functions para inyección de dependencias en Vanilla JavaScript
- Axios
- Interceptores de Axios
- TypeScript,
- Interfaces
- Tipos
- Clases
- Testing 
    - Integración
    - Unitarias
    - Restful
    - Mocks
    - Espías
    - Coverage
    - Más
- Aplicaciones de consola
    - Yargs
    - Leer argumentos desde consola
    - Variables de entorno
    - Seeds
- Bases de datos como
    - MongoDB
    - PostgresSQL
- Github
- Github Webhooks
- Tareas automáticas - CRON
- Repository Pattern
- Inyección de dependencias
- Envío de correos
    - Texto
    - Html
    - Gmail
- Loggers
- ORMs
- Prisma
- Mongoose
- Despliegue a Railway
- Rest Server con autenticación
- WebSockets
- Json Web Tokens
- Middlewares
- Relaciones de base de datos
- Carga de Archivos
- Aplicación de Colas - WebSockets + Rest
- WebHooks y Seguridad
- Bot de Discord
- Netlify Edge Functions
- Y mucho más.

## Deployment

Para los proyectos con Ts-node-dev:

```bash
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
```

