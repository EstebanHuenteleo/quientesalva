import sharp from 'sharp';
import { writeFileSync } from 'fs';

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="50%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#162d4a"/>
    </linearGradient>
    <radialGradient id="glow" cx="75%" cy="25%" r="50%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <!-- Decorative circle top-right -->
  <circle cx="950" cy="120" r="200" fill="white" fill-opacity="0.03" stroke="white" stroke-opacity="0.05" stroke-width="1"/>
  <circle cx="1000" cy="80" r="120" fill="white" fill-opacity="0.02"/>

  <!-- Logo icon (S centered in circle) -->
  <g transform="translate(80, 100)">
    <circle cx="60" cy="60" r="55" fill="none" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
    <path d="M85 35 H55 C38 35 38 60 55 60 H65 C82 60 82 85 65 85 H35"
          stroke="white" stroke-width="6" stroke-linecap="round" fill="none"/>
    <circle cx="32" cy="93" r="3.5" fill="#f97316"/>
  </g>

  <!-- Brand name -->
  <text x="215" y="130" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="bold" fill="white">
    quiente<tspan fill="#f97316">salva</tspan><tspan fill="white" fill-opacity="0.5">.cl</tspan>
  </text>

  <!-- Name -->
  <text x="215" y="185" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="bold" fill="white">
    Salvador Huenteleo
  </text>

  <!-- Role -->
  <text x="215" y="230" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#f97316" font-style="italic">
    Técnico en Construcción · Gasfíter Profesional
  </text>

  <!-- Divider -->
  <rect x="215" y="260" width="80" height="4" rx="2" fill="#f97316"/>

  <!-- Check 1 -->
  <text x="245" y="310" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="white" fill-opacity="0.85">
    +10 años de experiencia
  </text>
  <text x="217" y="311" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#22c55e">✓</text>

  <!-- Check 2 -->
  <text x="245" y="355" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="white" fill-opacity="0.85">
    Rápido, confiable y con garantía
  </text>
  <text x="217" y="356" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#22c55e">✓</text>

  <!-- Bottom bar -->
  <rect y="580" width="${WIDTH}" height="50" fill="#f97316"/>
  <text x="600" y="613" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="white" text-anchor="middle">
    +56 9 8833 6290 · quientesalva.cl
  </text>
</svg>`;

const outputPath = new URL('../public/img/og-image.png', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

sharp(Buffer.from(svg))
  .resize(WIDTH, HEIGHT)
  .png()
  .toFile(outputPath)
  .then(() => console.log('og-image.png generada exitosamente en', outputPath))
  .catch(err => console.error('Error:', err));
