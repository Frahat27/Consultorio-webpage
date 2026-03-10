# CYNTHIAH – Centro Odontológico Integral

Sitio web institucional one-page para CYNTHIAH, centro odontológico integral en Belgrano, CABA.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS 4**
- SEO técnico completo (metadata, OpenGraph, JSON-LD, sitemap, robots)
- Mobile-first, accesible, performante

## Correr en local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout global (header, footer, JSON-LD)
│   ├── page.tsx            # Home one-page
│   ├── globals.css         # Estilos base + paleta de colores
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   ├── privacidad/page.tsx # Política de privacidad
│   └── terminos/page.tsx   # Términos y condiciones
├── components/
│   ├── Header.tsx          # Header sticky con nav
│   ├── Hero.tsx            # Sección hero
│   ├── Trust.tsx           # 3 pilares de confianza
│   ├── Treatments.tsx      # Tratamientos (accordion)
│   ├── Prices.tsx          # Precios orientativos
│   ├── Team.tsx            # Equipo / Quiénes somos
│   ├── Reviews.tsx         # Reseñas de Google
│   ├── Location.tsx        # Ubicación y mapa
│   ├── FAQ.tsx             # Preguntas frecuentes
│   ├── Footer.tsx          # Footer con contacto
│   └── WhatsAppButton.tsx  # Botón flotante de WhatsApp
├── data/
│   ├── contact.ts          # Datos de contacto
│   ├── faq.ts              # Preguntas frecuentes
│   ├── prices.ts           # Precios orientativos
│   ├── reviews.ts          # Reseñas destacadas
│   ├── team.ts             # Equipo profesional
│   └── treatments.ts       # Tratamientos
└── lib/
    └── seo.ts              # Metadata, JSON-LD, helpers SEO
```

## Checklist de pendientes

Buscar `[PENDIENTE` en el código para encontrar todos los placeholders a completar:

### Datos de contacto (`src/data/contact.ts`)
- [ ] Número de WhatsApp (con código de país)
- [ ] Número de teléfono
- [ ] Email
- [ ] Dirección exacta
- [ ] Horarios de atención
- [ ] URL del iframe de Google Maps (embed)
- [ ] Link directo a Google Maps

### Equipo (`src/data/team.ts`)
- [ ] Nombre y datos de cada profesional
- [ ] Foto de cada profesional (colocar en `public/team/`)
- [ ] Formación y especialización de cada uno

### Precios (`src/data/prices.ts`)
- [ ] Completar rangos de precios para cada tratamiento
- [ ] Actualizar fecha de última actualización

### Reseñas (`src/data/reviews.ts`)
- [ ] Link a Google Maps del consultorio
- [ ] Place ID de Google
- [ ] Reseñas reales (reemplazar las de ejemplo)
- [ ] Verificar cantidad total y rating promedio

### SEO (`src/lib/seo.ts`)
- [ ] Confirmar dominio definitivo (aparece como `cynthiah.com.ar`)
- [ ] Completar datos de dirección en JSON-LD
- [ ] Coordenadas geográficas (latitud/longitud)
- [ ] Crear imagen OG (`public/og-image.jpg`, 1200x630px)

### Imágenes
- [ ] Fotos del equipo en `public/team/`
- [ ] Imagen OG en `public/og-image.jpg`
- [ ] Favicon personalizado

### Legal
- [ ] Revisar textos de privacidad y términos
- [ ] Actualizar fechas de "última actualización"

## Deploy en Vercel

1. Subir el repo a GitHub
2. Ir a [vercel.com](https://vercel.com) y crear un nuevo proyecto
3. Conectar el repositorio de GitHub
4. Vercel detecta Next.js automáticamente; deploy con un click
5. Configurar el dominio personalizado en Settings > Domains

```bash
# O desde la CLI:
npx vercel
```

## Notas de diseño

- Paleta verde-menta (`brand`) + tonos cálidos (`warm`) + neutros
- Tipografía: Inter (Google Fonts, optimizada con next/font)
- Sin librerías de UI externas
- Animaciones mínimas (hover transitions, accordion)
- Diseño responsivo mobile-first
