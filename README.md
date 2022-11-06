# CRM

CRM para el control de clientes realizado en ReactJS. Para el almacenamiento de datos se usará un server local empleando JSON Server, utlizando el fichero db.json incluido en el fichero.

## Tecnologías

La aplicación ha sido creada con las siguientes tecnologías:

- **ReactJS**
- **TailwindCSS**
- **ViteJS**
- **JavaScript**
- **React Router DOM**
- **JSON Server**

## API

Se utilizará una API local empleando JSON Server, que nos permitirá almacenar la información de manera persistente en el fichero db.json incluido en el proyecto.

## Despliegue local

Para un despliegue local de la aplicación, en primer lugar clona el repositorio e instala las dependencias:

```bash
npm install
```

Para que la aplicación funcione correctamente, necesitaremos tener también JSON Server, por lo que instálalo globalmente:

```bash
npm i -g json-server
```

Una vez instalado, levanta el servidor (asegúrate que exista el fichero db.json) indicando el puerto que desees **pero diferente al 3000**:

```bash
json-server --watch db.json --port PUERTO
```

Crea un fichero **.env** en la raíz del proyecto con el contenido del .env.example. Una vez lo tengas ya podemos levantar nuestra aplicación:

```bash
npm run dev
```

ViteJS abrirá automáticamente la aplicación en tu navegador.

## Variables de entorno

Todas las variables de entorno requeridas por la aplicación deben de comenzar por _VITE\__, al estar emplando **ViteJS**.

| Nombre variable | Descripción                             | Valor                            |
| --------------- | --------------------------------------- | -------------------------------- |
| VITE_API_URL    | _URL al servidor levantado previamente_ | http://localhost:PUERTO_SERVIDOR |
