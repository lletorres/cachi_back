# 🏔️ Cachi Backend — API RESTful de Turismo

Backend desarrollado en **Node.js + Express + MongoDB + JWT**, permite administrar usuarios, alojamientos, restaurantes, excursiones y categorías.  
Incluye autenticación JWT con roles (`admin` y `user`) para control de permisos.

---

## 🧰 Instalación y Uso

1️⃣ Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/cachi_back.git
cd cachi_back
```

2️⃣ Instalar dependencias:

```bash
npm install
```

3️⃣ Crear archivo `.env` basado en `.env.example`:

```
PORT = 3000
MONGODB_URI = mongodb://127.0.0.1:PORT
UTN_DB = ...
SECRET = "..."
```

4️⃣ Iniciar el servidor:

```bash
npm run dev
```

---

## 📦 Estructura del Proyecto

```bash
cachi_back/
 ├── src/
 │   ├── controllers/
 │   │   ├── userController.js
 │   │   ├── alojamientoController.js
 │   │   ├── restauranteController.js
 │   │   ├── excursionController.js
 │   │   └── categoriaController.js
 │   ├── routes/
 │   │   ├── userRoute.js
 │   │   ├── alojamientoRoute.js
 │   │   ├── restauranteRoute.js
 │   │   ├── excursionRoute.js
 │   │   └── categoriaRoute.js
 │   ├── models/
 │   │   ├── userModel.js
 │   │   ├── alojamientoModel.js
 │   │   ├── restauranteModel.js
 │   │   ├── excursionModel.js
 │   │   └── categoriaModel.js
 │   ├── middlewares/
 │   │   └── verifyTokenMiddleware.js
 │   ├── utils/
 │   │   └── verifyToken.js
 │   └── config/
 │       └── db.js
 ├── .env.example
 ├── package.json
 ├── README.md
 └── server.js
```

> 📘 **Nota:**  
> Esta estructura sigue una arquitectura modular, separando la lógica de negocio (controllers), las rutas de acceso (routes), los modelos de datos (models) y las herramientas de seguridad (middlewares y utils).  
> Esta organización mejora la mantenibilidad, escalabilidad y claridad del proyecto.

---

## 🚀 Funcionalidades Clave

- 🔐 **Autenticación y Autorización JWT**
  - Login y registro de usuarios
  - Control de roles: solo `admin` puede crear, editar o eliminar recursos
- 🧑‍💼 **Gestión de Usuarios**
  - CRUD completo con control de permisos
- 🏨 **Gestión de Alojamientos**
  - Listado, creación, actualización y eliminación
  - Relación con categorías (`Cabañas`, `Hoteles`)
- 🍽️ **Gestión de Restaurantes**
  - CRUD con categorías (`Gourmet`, `Regional`)
- 🧭 **Gestión de Excursiones**
  - CRUD con categorías (`Trekking`, `Cultural`)
- 🏷️ **Gestión de Categorías**
  - CRUD de tipos generales (usadas en las demás entidades)
- 🌐 **Seguridad**
  - Middleware `verifyToken` y `verifyAdmin`
  - Protección de rutas según rol
- 🧰 **Estructura modular**
  - Capas separadas en `models`, `controllers`, `services`, `routes`, `middlewares` y `utils`

---

## 🔐 Roles y Permisos

| Rol       | Permisos                                                                           |
| --------- | ---------------------------------------------------------------------------------- |
| **admin** | CRUD completo sobre usuarios, alojamientos, restaurantes, excursiones y categorías |
| **user**  | Puede registrarse, iniciar sesión y visualizar información pública                 |

---

## 🌍 Endpoints Principales

| Método   | Endpoint                | Descripción                | Rol necesario |
| -------- | ----------------------- | -------------------------- | ------------- |
| `POST`   | `/api/users/register`   | Crear nuevo usuario        | Público       |
| `POST`   | `/api/users/login`      | Login, genera token JWT    | Público       |
| `GET`    | `/api/users`            | Obtener todos los usuarios | Admin         |
| `GET`    | `/api/alojamientos`     | Listar alojamientos        | User / Admin  |
| `POST`   | `/api/alojamientos`     | Crear alojamiento          | Admin         |
| `PUT`    | `/api/alojamientos/:id` | Editar alojamiento         | Admin         |
| `DELETE` | `/api/alojamientos/:id` | Eliminar alojamiento       | Admin         |
| `GET`    | `/api/restaurantes`     | Listar restaurantes        | User / Admin  |
| `POST`   | `/api/restaurantes`     | Crear restaurante          | Admin         |
| `GET`    | `/api/excursiones`      | Listar excursiones         | User / Admin  |
| `POST`   | `/api/excursiones`      | Crear excursión            | Admin         |
| `GET`    | `/api/categorias`       | Listar categorías          | User / Admin  |
| `POST`   | `/api/categorias`       | Crear categoría            | Admin         |

---

## 🧩 Verbos HTTP utilizados

| Verbo    | Descripción                                              |
| -------- | -------------------------------------------------------- |
| `GET`    | Lectura de información (usuarios, alojamientos, etc.)    |
| `POST`   | Creación de nuevos recursos (usuarios, categorías, etc.) |
| `PUT`    | Actualización total o parcial de recursos existentes     |
| `DELETE` | Eliminación de recursos                                  |

---

## 🧱 Esquema de la Base de Datos (MongoDB)

### Colecciones principales:

#### 🧍‍♂️ Usuarios (`users`)

```json
{
  "nombre": "string",
  "apellido": "string",
  "email": "string",
  "password": "string (hashed)",
  "rol": "string ('user' | 'admin')",
  "createdAt": "date",
  "updatedAt": "date"
}
```

#### 🏠 Alojamientos (`alojamientos`)

```json
{
  "nombre": "string",
  "descripcion": "string",
  "direccion": "string",
  "precioPorNoche": "number",
  "telefono": "string",
  "imagen": "string (URL)",
  "categoria": "ObjectId -> Categoria"
}
```

#### 🍽️ Restaurantes (`restaurantes`)

```json
{
  "nombre": "string",
  "descripcion": "string",
  "direccion": "string",
  "especialidad": "string",
  "telefono": "string",
  "imagen": "string (URL)",
  "categoria": "ObjectId -> Categoria"
}
```

#### 🥾 Excursiones (`excursiones`)

```json
{
  "nombre": "string",
  "descripcion": "string",
  "duracionHoras": "number",
  "precio": "number",
  "imagen": "string (URL)",
  "categoria": "ObjectId -> Categoria"
}
```

#### 🏷️ Categorías (`categorias`)

```json
{
  "nombre": "string",
  "descripcion": "string",
  "tipo": "string (e.g., 'Alojamiento', 'Restaurante', 'Excursión')"
}
```

---

## ⚙️ Tecnologías Utilizadas

| Tecnología             | Uso                                      |
| ---------------------- | ---------------------------------------- |
| **Node.js**            | Entorno de ejecución del servidor        |
| **Express.js**         | Framework para crear la API REST         |
| **MongoDB**            | Base de datos NoSQL principal            |
| **Mongoose**           | ODM para modelar datos y crear esquemas  |
| **JWT (jsonwebtoken)** | Autenticación de usuarios                |
| **bcrypt**             | Hasheo de contraseñas                    |
| **dotenv**             | Manejo de variables de entorno           |
| **cors**               | Permitir acceso entre frontend y backend |

---

## 🧩 Funcionalidades Adicionales

- 🔄 **Populate en relaciones**  
  Todos los modelos con `categoria` hacen uso de `populate` para obtener el nombre y tipo de categoría asociada.
- 🧾 **Respuestas estandarizadas**  
  Todos los controladores responden con objetos JSON claros (`message`, `data` o `error`).
- 🧱 **Separación por capas**  
  Facilita mantenimiento, testing y escalabilidad.
- 🔍 **Validaciones Mongoose**  
  Campos requeridos, tipos, y relaciones referenciadas correctamente.
- 🧑‍💻 **Roles administrados desde tokens JWT**  
  Permite controlar el acceso sin hacer consultas repetidas a la base.

---

## 📦 Ejemplos de Datos Mock (JSON)

### 🧍‍♂️ `user`

```js
{
  "nombre": "Ezequiel",
  "apellido": "Paisark",
  "email": "ezequiel@turismo.com",
  "password": "123456",
  "rol": "user"
}
```

### 🏨 `alojamiento`

```js
{
  "nombre": "Hostal del Valle",
  "descripcion": "Cómodo alojamiento con vista al cerro.",
  "direccion": "Ruta 33, Cachi",
  "precioPorNoche": 15000,
  "telefono": "3875123456",
  "imagen": "https://source.unsplash.com/600x400/?hotel,cachi",
  "categoria": "ObjectIdCategoriaHotel"
}
```

### 🍽️ `restaurante`

```js
{
  "nombre": "Doña María Gourmet",
  "descripcion": "Restaurante con platos regionales y gourmet.",
  "direccion": "Belgrano 45, Cachi",
  "especialidad": "Gourmet",
  "telefono": "3875345678",
  "imagen": "https://source.unsplash.com/600x400/?restaurant,gourmet",
  "categoria": "ObjectIdCategoriaGourmet"
}
```

### 🧭 `excursion`

```js
{
  "nombre": "Trekking al Nevado de Cachi",
  "descripcion": "Excursión guiada de trekking con vistas al Nevado.",
  "duracionHoras": 6,
  "precio": 25000,
  "imagen": "https://source.unsplash.com/600x400/?mountain,trekking",
  "categoria": "ObjectIdCategoriaTrekking"
}
```

### 🏷️ `categoria`

```js
{
  "nombre": "Hoteles",
  "descripcion": "Categoría destinada a alojamientos tipo hotel o posada, con servicios completos para el turista."
  "tipo": "Alojamiento",

}
```

---

## 🧾 Autor

**Leandro Torres**  
Trabajo Final — Backend con MongoDB, Express y Node.js  
2025 · Diplomatura fullstack UTN

---
