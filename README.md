# Node Chat Backend (API RESTful)

Backend para un clon de aplicación de chat, construido con Node.js, Express y MongoDB.

## Instalación y Ejecución

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Renombrar `.env.example` a `.env` y configurar la URI de MongoDB (y el puerto si se desea).
4. Ejecutar `npm run dev` para iniciar el servidor en modo desarrollo.

## Endpoints

Las respuestas de la API siguen el formato estandarizado: `{ success: boolean, data: any, message: string }`.

### Usuarios (`/users`)
* **POST `/users`**: Crea un nuevo usuario. Body requerido: `{ "username": "String", "email": "String" }`.
* **GET `/users`**: Lista todos los usuarios.
* **DELETE `/users/:id`**: Elimina un usuario por su ID.

### Chats (`/chats`)
* **POST `/chats`**: Crea un nuevo chat. Body requerido: `{ "name": "String", "participants": ["userId1", "userId2"] }`.
* **GET `/chats`**: Lista todos los chats.

### Mensajes (`/messages`)
* **POST `/messages`**: Envía un mensaje. Body requerido: `{ "chatId": "ID", "userId": "ID", "content": "String" }`.
* **GET `/messages/:chatId`**: Obtiene el historial de mensajes de un chat específico.

## Conexión con el Frontend (React)

Para consumir esta API desde React, asegurate de que la URL base apunte al servidor desplegado o a `http://localhost:3000`. La API ya tiene habilitado el middleware `CORS` para aceptar peticiones desde dominios externos. Podés usar `fetch` o `axios`.