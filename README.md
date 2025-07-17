# Shop Frontend

Este proyecto es una aplicación web para un flujo de compra completo: catálogo, carrito, checkout y confirmación. Está desarrollado con React, Vite y Bootstrap, siguiendo una arquitectura basada en componentes y hooks personalizados.

## Características

- Catálogo de productos con animaciones y diseño responsivo
- Carrito de compras con conteo y gestión de productos
- Checkout con formulario validado para datos del cliente
- Confirmación de orden y manejo de estado global
- Modal para ver y gestionar el carrito
- Hooks personalizados para consumo de API y manejo de órdenes
- Tema oscuro/ligero automático
- Despliegue en Vercel

## Tecnologías utilizadas

- React + Vite
- Bootstrap 5
- TypeScript
- Vercel para despliegue
- Inteligencia Artificial (GitHub Copilot) para generación de servicios, componentes y hooks

## Estructura del proyecto

```
eslint.config.js
index.html
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
  vite.svg
src/
  App.tsx
  main.tsx
  vite-env.d.ts
  components/
    molecules/
      CartProductListItem.tsx
      OrdersButton.tsx
      ModalButton.tsx
      ProductCard.tsx
      index.ts
    organims/
      CartButton.tsx
      CartModalFooter.tsx
      CartModalForm.tsx
      CartProductsList.tsx
      ErrorAlert.tsx
      Loading.tsx
      Modal.tsx
      ModalHeader.tsx
      ProductList.tsx
      index.ts
    templates/
      CartModalTemplate.tsx
      HeaderTemplate.tsx
      OrdersModalTemplate.tsx
      ProductsTemplate.tsx
      index.ts
  context/
    CartContext.tsx
    CartModalContext.tsx
    OrdersModalContext.tsx
  hooks/
    useAddOrder.ts
    useOrders.ts
    useProducts.ts
    useTheme.ts
    index.ts
  models/
    clients.ts
    orders.ts
    products.ts
  services/
    orders.ts
    products.ts
    index.ts
```

## Jerarquía de componentes (Atomic Design)

- **Atoms**: Elementos básicos y reutilizables
  - Botones, Inputs, Badges, Iconos, etc.
- **Molecules**: Combinación de átomos
  - ProductCard, CartButton, CartProductListItem, OrdersButton, ModalButton, etc.
- **Organisms**: Secciones completas con lógica
  - CartProductsList, CartModalFooter, CartModalForm, ModalHeader, ProductList, ErrorAlert, Loading, Modal, etc.
- **Templates**: Estructura de páginas o modales
  - ProductsTemplate, CartModalTemplate, HeaderTemplate, OrdersModalTemplate, etc.

## Instalación

```bash
npm install
npm run dev
```

## Variables de entorno

Crea un archivo `.env` y agrega:

```
VITE_API_URL=https://your.service.api.com
```

## Deploy

El proyecto está listo para desplegarse en Vercel. Solo conecta tu repositorio y configura la variable de entorno `VITE_API_URL` en el dashboard de Vercel.

## Repositorio

[https://github.com/PabloGastelum/shop.frontend](https://github.com/PabloGastelum/shop.products)


## URL de la demo

[https://shop-products-roan.vercel.app/](https://shop-products-roan.vercel.app/)

---

Este proyecto fue desarrollado con ayuda de inteligencia artificial para acelerar la creación de servicios, componentes y hooks.
