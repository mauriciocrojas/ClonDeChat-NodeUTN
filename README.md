# Node Chat Backend (API RESTful)

Backend para un clon de aplicación de chat, construido con Node.js, Express y MongoDB. 
Desarrollado como Trabajo Final Integrador para el Centro de e-Learning UTN BA.

## 🚀 Despliegue en Producción (Render)

La API se encuentra desplegada y accesible públicamente en:
**URL Base:** `https://clondechat-nodeutn.onrender.com`

### Usuario de Prueba
Para facilitar la validación y prueba de los endpoints, ya se encuentra registrado el siguiente usuario en la base de datos de producción:
* **Username:** `profesor_utn`
* **Email:** `profesor@prueba.com`

---

## 💻 Instalación y Ejecución Local

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Renombrar `.env.example` a `.env` y configurar la URI de MongoDB Atlas (y el puerto si se desea).
4. Ejecutar `npm run dev` para iniciar el servidor en modo desarrollo.

---

## 📡 Endpoints de la API

Las respuestas de la API siguen un formato estandarizado para facilitar su consumo: 
`{ "success": boolean, "data": any, "message": string }`

### 1. Usuarios (`/users`)

* **POST `/users`**: Crea un nuevo usuario.
  * **Request Body:**
    ```json
    {
      "username": "mrojas",
      "email": "mauricio@ejemplo.com"
    }
    ```
  * **Response (201 Created):**
    ```json
    {
      "success": true,
      "data": {
        "username": "mrojas",
        "email": "mauricio@ejemplo.com",
        "_id": "64b5f9e...",
        "createdAt": "2026-07-20T..."
      },
      "message": "Usuario creado exitosamente"
    }
    ```

* **GET `/users`**: Lista todos los usuarios registrados.
* **DELETE `/users/:id`**: Elimina un usuario por su ID.

### 2. Chats (`/chats`)

* **POST `/chats`**: Crea un nuevo chat entre usuarios.
  * **Request Body:**
    ```json
    {
      "name": "Chat de Proyecto",
      "participants": ["ID_USUARIO_1", "ID_USUARIO_2"]
    }
    ```
  * **Response (201 Created):**
    ```json
    {
      "success": true,
      "data": {
        "name": "Chat de Proyecto",
        "participants": ["ID_USUARIO_1", "ID_USUARIO_2"],
        "_id": "64b5fa1..."
      },
      "message": "Chat creado exitosamente"
    }
    ```

* **GET `/chats`**: Lista todos los chats y trae la información básica de los participantes (populate).

### 3. Mensajes (`/messages`)

* **POST `/messages`**: Envía un mensaje a un chat específico.
  * **Request Body:**
    ```json
    {
      "chatId": "ID_DEL_CHAT",
      "userId": "ID_DEL_USUARIO",
      "content": "¡Hola! ¿Cómo están?"
    }
    ```
  * **Response (201 Created):**
    ```json
    {
      "success": true,
      "data": {
        "chatId": "ID_DEL_CHAT",
        "userId": "ID_DEL_USUARIO",
        "content": "¡Hola! ¿Cómo están?",
        "_id": "64b5fc3..."
      },
      "message": "Mensaje enviado exitosamente"
    }
    ```

* **GET `/messages/:chatId`**: Obtiene el historial completo de mensajes de un chat específico.

---

## 🔗 Conexión con el Frontend (React)

Para consumir esta API desde un frontend (ej: React), apuntar la URL base hacia el servidor en Render (`https://clondechat-nodeutn.onrender.com`). 
La API ya cuenta con el middleware `cors` configurado para habilitar las peticiones de dominios cruzados. Se pueden realizar las peticiones utilizando `fetch` nativo o librerías como `axios`.