# Node Chat Backend (API RESTful)

Backend para un clon de aplicación de chat, construido con Node.js, Express y MongoDB. 
Desarrollado como Trabajo Final Integrador para el Centro de e-Learning UTN BA.

**Enfoque del Proyecto:** El desarrollo de esta API fue planteado con una arquitectura *Cloud-First*. Se utilizó **Render** para el despliegue y **MongoDB Atlas** para la persistencia de datos desde el inicio del ciclo de vida del proyecto, garantizando un entorno de producción estable, pruebas continuas y disponibilidad inmediata.

---

## 🚀 Despliegue en Producción (Render)

La API se encuentra desplegada y accesible públicamente en:
**URL Base:** `[https://clondechat-nodeutn.onrender.com](https://clondechat-nodeutn.onrender.com)`

### Usuario de Prueba y Datos Reales
Para facilitar la validación y prueba de los endpoints en el entorno de producción, ya se encuentran registrados los siguientes datos reales en la base de datos:

* **Usuario 1 (Profesor):** 
  * ID: `6a5e52546a80b08650305747`
  * Username: `profesor_utn`
* **Usuario 2 (Alumno):** 
  * ID: `6a5e55ac6a80b08650305749`
  * Username: `alumno_utn`
* **Chat de Prueba (Sala UTN):**
  * ID: `6a5e55d06a80b0865030574a`

---

## 💻 Instalación y Ejecución Local

Si bien el proyecto corre nativamente en la nube, se puede levantar un entorno de desarrollo local siguiendo estos pasos:

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Renombrar `.env.example` a `.env` y configurar la URI de MongoDB Atlas (y el puerto si se desea).
4. Ejecutar `npm run dev` para iniciar el servidor.

---

## 📡 Endpoints de la API y Ejemplos de Uso

Las respuestas de la API siguen un formato estandarizado para facilitar su consumo: 
`{ "success": boolean, "data": any, "message": string }`

### 1. Usuarios (`/users`)

* **POST `/users`**: Crea un nuevo usuario.
  * **Request Body:**
    ~~~json
    {
      "username": "alumno_utn",
      "email": "alumno@prueba.com"
    }
    ~~~
  * **Response (201 Created):**
    ~~~json
    {
      "success": true,
      "data": {
        "username": "alumno_utn",
        "email": "alumno@prueba.com",
        "_id": "6a5e55ac6a80b08650305749",
        "createdAt": "2026-07-20T17:06:52.665Z"
      },
      "message": "Usuario creado exitosamente"
    }
    ~~~

* **GET `/users`**: Lista todos los usuarios registrados.
* **DELETE `/users/:id`**: Elimina un usuario por su ID.

### 2. Chats (`/chats`)

* **POST `/chats`**: Crea un nuevo chat entre usuarios.
  * **Request Body:**
    ~~~json
    {
      "name": "Sala UTN",
      "participants": ["6a5e52546a80b08650305747", "6a5e55ac6a80b08650305749"]
    }
    ~~~
  * **Response (201 Created):**
    ~~~json
    {
      "success": true,
      "data": {
        "name": "Sala UTN",
        "participants": [
          "6a5e52546a80b08650305747",
          "6a5e55ac6a80b08650305749"
        ],
        "_id": "6a5e55d06a80b0865030574a",
        "createdAt": "2026-07-20T17:07:28.644Z"
      },
      "message": "Chat creado exitosamente"
    }
    ~~~

* **GET `/chats`**: Lista todos los chats y trae la información básica de los participantes (usando populate).

### 3. Mensajes (`/messages`)

* **POST `/messages`**: Envía un mensaje a un chat específico.
  * **Request Body:**
    ~~~json
    {
      "chatId": "6a5e55d06a80b0865030574a",
      "userId": "6a5e55ac6a80b08650305749",
      "content": "¡Hola profe! Acá le dejo el trabajo integrador listo y funcionando."
    }
    ~~~
  * **Response (201 Created):**
    ~~~json
    {
      "success": true,
      "data": {
        "chatId": "6a5e55d06a80b0865030574a",
        "userId": "6a5e55ac6a80b08650305749",
        "content": "¡Hola profe! Acá le dejo el trabajo integrador listo y funcionando.",
        "_id": "6a5e56d06a80b0865030574c",
        "createdAt": "2026-07-20T17:15:10.123Z"
      },
      "message": "Mensaje enviado exitosamente"
    }
    ~~~

* **GET `/messages/:chatId`**: Obtiene el historial completo de mensajes de un chat específico. Ejemplo válido: `GET /messages/6a5e55d06a80b0865030574a`

---

## 🧪 Casos de Prueba (Testing Rápido)

Para evaluar el correcto funcionamiento de la API, se pueden utilizar los siguientes comandos cURL o importar sus respectivos JSON en Postman/Thunder Client. Estos tests apuntan al servidor en producción utilizando los datos reales ya persistidos.

**1. Obtener la lista de usuarios (GET)**
~~~bash
curl [https://clondechat-nodeutn.onrender.com/users](https://clondechat-nodeutn.onrender.com/users)
~~~

**2. Enviar un nuevo mensaje a la Sala UTN (POST)**
~~~bash
curl -X POST [https://clondechat-nodeutn.onrender.com/messages](https://clondechat-nodeutn.onrender.com/messages) \
-H "Content-Type: application/json" \
-d "{\"chatId\": \"6a5e55d06a80b0865030574a\", \"userId\": \"6a5e52546a80b08650305747\", \"content\": \"Mensaje de prueba para validar el endpoint desde la corrección.\"}"
~~~

**3. Leer el historial de la Sala UTN actualizado (GET)**
~~~bash
curl [https://clondechat-nodeutn.onrender.com/messages/6a5e55d06a80b0865030574a](https://clondechat-nodeutn.onrender.com/messages/6a5e55d06a80b0865030574a)
~~~

---

## 🔗 Conexión con el Frontend (React)

Para consumir esta API desde un frontend (ej: React), apuntar la URL base hacia el servidor en Render (`[https://clondechat-nodeutn.onrender.com](https://clondechat-nodeutn.onrender.com)`). 
La API ya cuenta con el middleware `cors` configurado nativamente para habilitar las peticiones de dominios cruzados sin problemas.