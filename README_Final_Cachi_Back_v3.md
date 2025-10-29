# 🏞️ Cachi Turismo Backend

**Autor:** Leandro Torres  
**Proyecto:** Backend - Tecnicatura Universitaria en Programación (UTN)  
**Descripción:**  
Proyecto backend para la gestión de un sitio turístico sobre la localidad de **Cachi**, Salta.  
Permite administrar usuarios, alojamientos, restaurantes, excursiones y categorías.  
Incluye autenticación JWT con roles (`admin` y `user`) para control de permisos.

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
  "categoria": "ObjectId -> Categoria",
  "imagen": "string (URL)"
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
  "categoria": "ObjectId -> Categoria",
  "imagen": "string (URL)"
}
```

#### 🏷️ Categorías (`categorias`)
```json
{
  "nombre": "string",
  "tipo": "string (e.g., 'Alojamiento', 'Restaurante', 'Excursión')",
  "descripcion": "string"
}
```

---

## ⚙️ Tecnologías Utilizadas

- **Node.js** y **Express.js** → Servidor backend  
- **MongoDB** y **Mongoose** → Base de datos NoSQL y ODM  
- **JWT (jsonwebtoken)** → Autenticación basada en tokens  
- **bcrypt.js** → Hashing de contraseñas  
- **dotenv** → Variables de entorno  
- **cors** → Permitir solicitudes desde el frontend  
- **helmet** → Seguridad HTTP  
- **nodemon** → Desarrollo en tiempo real  

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/usuario/cachi_back.git
cd cachi_back
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Crear archivo `.env`
```bash
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/turismoDB
SECRET="tu_clave_secreta"
```

### 4️⃣ Ejecutar el servidor

**Modo desarrollo:**
```bash
npm run dev
```

**Modo producción:**
```bash
npm start
```

---

## 🔗 Endpoints Disponibles

*(Idénticos a los anteriores, no repetidos por brevedad)*

---

## 📦 Ejemplos de Datos Mock (JSON)

### 🏷️ Categorías
```json
[
  {
    "nombre": "Hoteles",
    "tipo": "Alojamiento",
    "descripcion": "Categoría destinada a alojamientos tipo hotel o posada, con servicios completos para el turista."
  },
  {
    "nombre": "Cabañas",
    "tipo": "Alojamiento",
    "descripcion": "Alojamientos rústicos o familiares ubicados en zonas tranquilas, ideales para grupos o familias."
  },
  {
    "nombre": "Gourmet",
    "tipo": "Restaurante",
    "descripcion": "Restaurantes de cocina internacional o de autor, con enfoque gastronómico premium."
  },
  {
    "nombre": "Regional",
    "tipo": "Restaurante",
    "descripcion": "Restaurantes que ofrecen comida típica del Valle Calchaquí y productos locales."
  },
  {
    "nombre": "Trekking",
    "tipo": "Excursión",
    "descripcion": "Excursiones de senderismo por paisajes naturales, ideales para aventureros."
  },
  {
    "nombre": "Cultural",
    "tipo": "Excursión",
    "descripcion": "Actividades culturales guiadas, visitas a museos y sitios históricos de Cachi."
  }
]
```

---

## 🔐 Roles y Permisos

| Rol | Permisos |
|-----|-----------|
| **admin** | CRUD completo sobre usuarios, alojamientos, restaurantes, excursiones y categorías |
| **user** | Puede registrarse, iniciar sesión y visualizar información pública |

---

## ✨ Autor

**Leandro Torres**  
Cachi Turismo - Proyecto Backend UTN  
📧 leandrotorres@turismo.com
