# Dental Hat – Odontología y Ortodoncia

Sitio web institucional one-page para **Dental Hat**, centro odontológico en Belgrano, CABA.

🌐 **URL:** https://dentalhat.up.railway.app

---

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS 4**
- Deploy en **Railway**
- SEO técnico completo (metadata, OpenGraph, JSON-LD, sitemap, robots)
- Google Analytics (G-YP2Q4JWVV7)
- Mobile-first, accesible, performante

---

## Correr en local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout global (header, footer, JSON-LD, GA)
│   ├── page.tsx            # Home one-page
│   ├── globals.css         # Estilos base + paleta de colores
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   ├── privacidad/page.tsx # Política de privacidad
│   └── terminos/page.tsx   # Términos y condiciones
├── components/
│   ├── Header.tsx          # Header sticky con nav y menú mobile
│   ├── Hero.tsx            # Hero con foto diferente en mobile/desktop
│   ├── Trust.tsx           # 4 pilares de confianza
│   ├── Treatments.tsx      # Tratamientos accordion + CTA WhatsApp
│   ├── Team.tsx            # Carrusel del equipo profesional
│   ├── Reviews.tsx         # Carrusel de reseñas de Google
│   ├── Location.tsx        # Ubicación, horarios y mapa
│   ├── FAQ.tsx             # Preguntas frecuentes + schema FAQPage
│   ├── Footer.tsx          # Footer con contacto e Instagram
│   ├── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   └── GoogleAnalytics.tsx # GA4 via variable de entorno
├── data/
│   ├── contact.ts          # Datos de contacto, horarios, áreas
│   ├── faq.ts              # Preguntas frecuentes
│   ├── prices.ts           # Precios (sección oculta, disponible)
│   ├── reviews.ts          # Reseñas destacadas + config rating
│   ├── team.ts             # Equipo profesional con fotos
│   └── treatments.ts       # Tratamientos con descripción y especialista
└── lib/
    └── seo.ts              # Metadata, JSON-LD Dentist + Person + FAQ
```

---

## Variables de entorno (Railway)

| Variable | Valor |
|---|---|
| `NEXT_PUBLIC_GA_ID` | `G-YP2Q4JWVV7` |

---

## SEO implementado

- ✅ JSON-LD `Dentist` con dirección, coordenadas, horarios y rating
- ✅ JSON-LD `Person` por cada especialista del equipo
- ✅ JSON-LD `FAQPage` para rich snippets en Google
- ✅ JSON-LD `Review` + `AggregateRating` para estrellas en resultados
- ✅ OpenGraph + Twitter Card con imagen de preview
- ✅ Sitemap y robots.txt
- ✅ `lang="es-AR"` para señales locales
- ✅ Imágenes optimizadas automáticamente en AVIF/WebP
- ✅ Meta description con keyword + CTA (155 chars)
- ✅ Google Analytics activo
- ✅ Registrado en Doctoralia

---

## Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `brand-600` | `#4a8fbf` | Botones, íconos, acentos |
| `brand-50` | `#eaf4fb` | Fondos suaves |
| `amber-400` | `#fbbf24` | CTA principal, estrellas |
| `neutral-900` | `#0f172a` | Textos principales |

---

## Pendientes futuros

| Tarea | Detalle |
|---|---|
| Dominio propio | Cambiar `SITE_URL` en `src/lib/seo.ts` |
| Reseñas reales | Reemplazar array en `src/data/reviews.ts` |
| Imagen OG real | `public/og-image.jpg` 1200×630px |
| Favicon personalizado | Reemplazar `src/app/favicon.ico` |

---

## Deploy

El sitio se despliega automáticamente en Railway cada vez que se hace push a `main`.

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```
