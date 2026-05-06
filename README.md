# CRESTA - Botella Inteligente para Aventura

## Descripcion

Landing page de alta conversion para **CRESTA**, la botella inteligente con:

- **GPS integrado** (funciona offline, sincroniza con smartwatch)
- **Linterna LED recargable** (3 modos: alto, bajo, SOS)
- **Autocalentamiento** (hasta 65C en 4 minutos)
- **Analisis de pureza del agua** (conductividad, turbidez, pH)
- **Conectividad** con Apple Health, smartwatch y app CRESTA

## Tecnologias utilizadas

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (iconos)
- **Framer Motion** (animaciones)

## Estructura del proyecto

```
cresta/
├── app/
│   ├── page.tsx                 # Pagina principal
│   ├── layout.tsx               # Layout raiz
│   ├── globals.css              # Estilos globales
│   ├── about/                   # Pagina Nosotros
│   ├── contact/                 # Pagina Contacto
│   ├── shop/                    # Pagina Tienda
│   ├── privacy/                 # Politica de Privacidad
│   ├── terms/                   # Terminos y Condiciones
│   ├── shipping/                # Informacion de Envios
│   ├── returns/                 # Devoluciones
│   └── warranty/                # Garantia
├── components/
│   ├── header.tsx               # Navegacion con selector ES/EN
│   ├── floating-buy-button.tsx  # Boton flotante de compra
│   ├── email-modal.tsx          # Modal captura de email
│   └── sections/                # Todas las secciones
│       ├── hero-video-section.tsx
│       ├── hero-section.tsx
│       ├── technology-section.tsx
│       ├── water-analysis-section.tsx
│       ├── offline-section.tsx
│       ├── connectivity-section.tsx
│       ├── featured-products-section.tsx
│       ├── collection-section.tsx
│       ├── gallery-section.tsx
│       ├── philosophy-section.tsx
│       ├── editorial-section.tsx
│       ├── community-section.tsx
│       ├── routes-map-section.tsx
│       ├── events-section.tsx
│       ├── community-testimonials-section.tsx
│       ├── resources-section.tsx
│       ├── packs-section.tsx
│       ├── trust-stats-section.tsx
│       ├── certifications-section.tsx
│       ├── testimonials-section.tsx
│       ├── faq-section.tsx
│       ├── newsletter-section.tsx
│       └── footer-section.tsx
├── lib/
│   └── language-context.tsx     # Contexto multiidioma ES/EN
└── public/
    ├── images/                  # Imagenes del proyecto
    └── videos/                  # Videos del proyecto
```

## Instalacion local

```bash
# Clonar el repositorio
git clone [URL-DEL-REPO]
cd cresta

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Abrir en el navegador
# http://localhost:3000
```

## Despliegue en Vercel

### Opcion 1: Desde v0 (Recomendado)
1. Haz clic en el boton **"Publish"** en la esquina superior derecha de v0
2. Vercel desplegara automaticamente el proyecto
3. Obtendras una URL publica inmediatamente

### Opcion 2: Desde GitHub
1. Sube este repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesion
3. Haz clic en "Add New Project"
4. Importa el repositorio desde GitHub
5. Vercel detectara automaticamente Next.js
6. Haz clic en "Deploy"

## Caracteristicas principales

- **Multiidioma**: Selector ES/EN en el header
- **Responsive**: Adaptado a movil, tablet y escritorio
- **Video Hero**: Video de fondo a pantalla completa
- **Animaciones**: Contadores animados, transiciones suaves
- **Modales**: Captura de email, confirmacion de compra
- **SEO optimizado**: Metadatos, Open Graph, descripcion

## Secciones incluidas

1. Hero con video de fondo
2. Tecnologia y caracteristicas
3. Analisis de agua (NUEVO)
4. GPS Offline (NUEVO)
5. Conectividad App (NUEVO)
6. Productos destacados
7. Coleccion de botellas
8. Galeria lifestyle
9. Filosofia de marca
10. Editorial con video
11. Comunidad y servicios
12. Mapa de rutas interactivo
13. Calendario de eventos
14. Testimonios de la comunidad
15. Recursos descargables (lead magnet)
16. Packs de producto
17. Estadisticas de confianza
18. Certificaciones de calidad
19. Testimonios de producto
20. FAQ tecnico
21. Newsletter
22. Footer con enlaces funcionales

## Creditos

Desarrollado para **CRESTA**

**IDEA BY RUBIK SOTA 629554870**

---

© 2026 CRESTA. All rights reserved.
