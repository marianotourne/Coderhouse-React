# Getting Started with Create React App

[Link al sitio](https://10y10.netlify.app/)

Este proyecto es parte del trabajo final del curso de React JS comisión 39670, realizado en Coderhouse.

Se creó con Create React App.

## Navegabilidad

Se puede navegar por categorías de producto, agregar productos al carrito hasta sus cantidades disponibles en stock, se valida el stock al confirmar la compra, eliminación de uno o todos los productos del carrito.

Utilicé ReactRouterDom para la navegabilidad, Context para el manejo de listado de productos agregados al carrito, y CSS puro para estilos.

Utilicé Firebase para el manejo de base de datos tanto de listado de productos como generación y almacenamiento de las órdenes de compra.

Se adapta a múltiples pantallas, ya sean laptops, tablets y celulares.

## Librerías utilizadas 🛠️

- "firebase": "^9.22.0"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-router-dom": "^6.11.0"
- "react-scripts": "5.0.1"
- "web-vitals": "^2.1.4"

# minuto 27 ver ejemplo del tutor

# Listado de TODOs

- Almacenar información en LocalStorage
- Notificación cada vez que se agrega o elimina algún producto al carrito, o cuando se vacía el mismo.
- Búsqueda de ordenes de compra y visualización de la información de la misma.
