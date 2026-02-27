# quientesalva.cl - Sitio Web Profesional

## Sobre el Proyecto
Sitio web profesional para **Salvador Huenteleo**, gasfiter independiente en Santiago de Chile.
El objetivo es captar clientes en comunas del sur de Santiago mediante presencia digital.
Dominio: **quientesalva.cl**

## Stack
- **Astro 5** - Framework estático
- **Tailwind CSS v4** - Estilos (configurado via `@tailwindcss/vite`)
- **AOS** (Animate On Scroll) - Animaciones al hacer scroll
- **SVG inline** - Íconos sin dependencias extras

## Deploy
- **Vercel** conectado al repo GitHub `EstebanHuenteleo/quientesalva`
- Push a `main` → deploy automático en Vercel
- No usar GitHub Actions/Pages (se eliminó)

## Estructura Clave

```
src/
├── data/siteConfig.ts      # Todas las constantes del negocio (WhatsApp, comunas, horario, etc.)
├── layouts/Layout.astro     # Layout principal con SEO, meta tags, AOS init
├── styles/global.css        # Tailwind imports + colores custom + estilos base
├── components/
│   ├── Navbar.astro         # Nav fija, transparente→sólida al scroll, hamburguesa mobile
│   ├── Hero.astro           # Sección principal con CTAs WhatsApp y teléfono
│   ├── Services.astro       # Grid 6 servicios con íconos
│   ├── WhyMe.astro          # 4 diferenciadores (certificado, rápido, garantía, precios)
│   ├── Gallery.astro        # Galería de trabajos (actualmente placeholders)
│   ├── About.astro          # Bio, timeline experiencia, certificaciones
│   ├── Coverage.astro       # Chips con comunas de cobertura
│   ├── Contact.astro        # WhatsApp, teléfono, horario, formulario
│   ├── Footer.astro         # Copyright + redes sociales
│   └── WhatsAppFloat.astro  # Botón flotante WhatsApp esquina inferior derecha
└── pages/
    └── index.astro          # Página principal (compone todos los componentes)
```

## Paleta de Colores (definida en global.css @theme)

| Variable | Color | Uso |
|---|---|---|
| `--color-primary` | `#1e3a5f` | Azul oscuro - fondos, headings |
| `--color-primary-light` | `#2563eb` | Azul medio - hover, acentos |
| `--color-accent` | `#f97316` | Naranja - CTAs, urgencias |
| `--color-whatsapp` | `#25d366` | Verde - botones WhatsApp |
| `--color-surface` | `#f8fafc` | Gris claro - fondos alternos |
| `--color-text` | `#1e293b` | Gris oscuro - texto principal |

## Configuración Centralizada
Todo dato del negocio está en `src/data/siteConfig.ts`:
- Número WhatsApp, teléfono
- Horario de atención
- Comunas de cobertura
- Certificaciones SEC
- Redes sociales (pendientes de agregar)

**Para cambiar datos del negocio, editar solo `siteConfig.ts`.**

## Flujo de Trabajo
1. Hacer cambios localmente
2. Probar con `npm run dev` (localhost:4321)
3. Verificar build con `npm run build`
4. Commit + push a `main` → Vercel deploya automáticamente

## Pendientes / Mejoras Futuras
- [ ] Reemplazar imágenes placeholder en Gallery y About con fotos reales
- [ ] Agregar URLs de Instagram y Facebook en siteConfig.ts
- [ ] Implementar formulario de contacto con EmailJS o similar
- [ ] Agregar archivos PDF de certificaciones SEC
- [ ] Crear imagen og-image.png real para compartir en redes
- [ ] Considerar agregar testimonios de clientes
- [ ] Agregar Google Analytics o similar

## Convenciones
- Comunicación en **español**
- Componentes Astro en `src/components/`, uno por sección
- Clases Tailwind directamente en los componentes (no CSS separado)
- Íconos como SVG inline (Heroicons style, stroke-width 1.5)
- Animaciones AOS con `data-aos="fade-up"` y delays escalonados
- Mobile-first: siempre verificar en 375px, 768px y 1280px
