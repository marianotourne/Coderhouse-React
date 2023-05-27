# Proyecto final curso de React

[Link al sitio](https://10y10.netlify.app/)

Este proyecto es parte del trabajo final del curso de React JS comisión 39670, realizado en Coderhouse.

Se trata de un sitio de e-commerce. Se creó con Create React App.

## :building_construction: Navegabilidad y funcionamiento

Se puede navegar por categorías de producto.
Agregar productos al carrito hasta sus cantidades disponibles en stock.
Valicación de stock al confirmar la compra.
Eliminación de uno o todos los productos del carrito.

Utilicé ReactRouterDom para la navegabilidad entre rutas, Context para el manejo de listado de productos agregados al carrito, y CSS puro para estilos.

Utilicé Firebase para el manejo de base de datos tanto de listado de productos como para el almacenamiento de las órdenes de compra.

Al finalizar la compra, se ingresan obligatoriamente los datos personales del comprador, mail y se valida que el email sea confirmado correctamente.

Se adapta a múltiples pantallas, ya sean laptops, tablets y celulares.

## 🛠️ Dependencias utilizadas

[![Generic badge](https://img.shields.io/badge/testinglibrary/jestdom-^5.16.5-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/testinglibrary/react-^13.4.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/testinglibrary/userevent-^13.5.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/firebase-^9.22.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/react-^18.2.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/reactdom-^18.2.0"-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/reactrouterdom-^6.11.0-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/reactscripts-5.0.1-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/webvitals-^2.1.4-green.svg)](https://shields.io/)

## :floppy_disk: Instalación

1. Clonar el repositorio
   `git clone git@github.com:marianotourne/PreEntrega2Tourne.git`

2. Instalar dependencias
   `npm install`

3. Ejecuta la aplicación en http://localhost:3000.
   La página se volverá a cargar cuando realice cambios.
   `npm run start`

## :spiral_notepad: Listado de TODOs

- Almacenar información en LocalStorage
- Notificación cada vez que se agrega o elimina algún producto al carrito, o cuando se vacía el mismo.
- Búsqueda de ordenes de compra y visualización de la información de la misma.
