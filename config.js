/**
 * ╔══════════════════════════════════════════════════════╗
 * ║         CONFIGURACIÓN DE PROYECTOS — María Feria     ║
 * ║  Edita este archivo para cambiar toda la información  ║
 * ║  que aparece en cada página de proyecto.              ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * Cada proyecto tiene:
 *   id         → identificador único (no cambiar)
 *   categoria  → 'branding' | 'impresos' | 'mockup'
 *   titulo     → Nombre del proyecto (aparece en el hero de la página)
 *   subtitulo  → Línea secundaria del título (puede ser vacío "")
 *   etiqueta   → Texto pequeño encima del título (cliente · tipo · año)
 *   cliente    → Nombre del cliente
 *   año        → Año o rango de años
 *   servicios  → Lista de servicios (separados por " · ")
 *   descripcion → Texto libre que aparece en la página del proyecto
 *   cover      → Imagen de portada (ruta relativa a la carpeta img/)
 *   imagenes   → Array con todas las imágenes del proyecto
 */

const BASE  = 'img/BAVARIAN REAL ESTATE/';
const PADEL = 'img/DRIVE PADEL - escuela de pádel/';

// Función interna — no tocar
function paginas(carpeta, total) {
  return Array.from({length: total}, (_, i) =>
    carpeta + 'pagina-' + String(i+1).padStart(2,'0') + '.jpg'
  );
}

// ─────────────────────────────────────────────────────────
// PROYECTOS  (puedes reordenarlos — el orden aquí = orden en la web)
// ─────────────────────────────────────────────────────────
const PROYECTOS = [

  // ── BRANDING ──────────────────────────────────────────

  {
    id:          'drive-padel',
    categoria:   'branding',
    titulo:      'Drive Pádel Sevilla',
    subtitulo:   '— Branding & Identidad visual',
    etiqueta:    'Branding · Drive Pádel Sevilla · 2025',
    cliente:     'Drive Pádel Sevilla',
    año:         '2025',
    servicios:   'Logo · Manual de identidad · Camisetas · Bolsas · Señalética · Aplicaciones corporativas',
    descripcion: 'Diseño de identidad completa para escuela de pádel en Sevilla. Incluye logotipo, paleta de colores, tipografía y aplicaciones en diferentes soportes.',
    cover:       PADEL + 'mockup - 4-2.jpg',
    imagenes: [
      PADEL + 'Drive Padel Sevilla - logo.jpg',
      PADEL + 'mockup - 4-2.jpg',
      PADEL + 'mockup - 2.jpg',
      PADEL + 'mockup 3.jpg',
      PADEL + 'mockup.jpg',
      ...paginas(PADEL + 'Branding/', 17)
    ]
  },

  {
    id:          'tareya-branding',
    categoria:   'branding',
    titulo:      'Tareya Rural Living',
    subtitulo:   '— Identidad de marca',
    etiqueta:    'Branding · Bavarian Group · 2025',
    cliente:     'Bavarian Real Estate',
    año:         '2025',
    servicios:   'Logo · Paleta de colores · Tipografía · Isotipos · Texturas · Manual de identidad',
    descripcion: 'Desarrollo de identidad visual completa para el proyecto inmobiliario Tareya Rural Living en República Dominicana.',
    cover:       BASE + 'TAREYA - proyecto inmobiliario/tareya.jpg',
    imagenes: [
      BASE + 'TAREYA - proyecto inmobiliario/tareya.jpg',
      BASE + 'TAREYA - proyecto inmobiliario/PNG/Logo horizontal/TAREYA - logo horizontal verde.jpg',
      BASE + 'TAREYA - proyecto inmobiliario/PNG/Logo horizontal/TAREYA - logo horizontal beige.jpg',
      BASE + 'TAREYA - proyecto inmobiliario/PNG/Logo vertical/TAREYA - logo vertical verde.jpg',
      BASE + 'TAREYA - proyecto inmobiliario/PNG/Logo vertical/TAREYA - Logo vertical beige.jpg',
      BASE + 'TAREYA - proyecto inmobiliario/PNG/Isotipo/TAREYA - isotipo verde.jpg',
      BASE + 'TAREYA - proyecto inmobiliario/PNG/Isotipo/TAREYA - isotipo beige.jpg',
      BASE + 'TAREYA - proyecto inmobiliario/PNG/Textura/TAREYA - Mosaico final - verde.jpg',
      BASE + 'TAREYA - proyecto inmobiliario/PNG/Textura/TAREYA - Mosaico final - beige.jpg',
      ...paginas(BASE + 'TAREYA - proyecto inmobiliario/Branding/', 10)
    ]
  },

  // ── IMPRESOS ──────────────────────────────────────────

  {
    id:          'forest-triptico',
    categoria:   'impresos',
    titulo:      'Forest Punta Cana',
    subtitulo:   '— Tríptico de ventas',
    etiqueta:    'Impresos · Bavarian Group · 2025',
    cliente:     'Bavarian Real Estate',
    año:         '2025',
    servicios:   'Diseño de tríptico · Maquetación · Composición · Mockups',
    descripcion: 'Tríptico de ventas para el proyecto residencial Forest Punta Cana. Material impreso para comercialización.',
    cover:       BASE + 'FOREST - proyecto inmobiliario/Doblado.jpg',
    imagenes: [
      BASE + 'FOREST - proyecto inmobiliario/Doblado.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte delantera - Forest abierto.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte delantera - Forest abierto (recto).jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte interior.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte interior - 2.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte trasera.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte trasera - 2.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte trasera - Forest (recto).jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte trasera - Forest abierto.jpg',
      BASE + 'FOREST - proyecto inmobiliario/abierto - Forest.jpg',
      BASE + 'FOREST - proyecto inmobiliario/1.jpg',
      BASE + 'FOREST - proyecto inmobiliario/2.jpg',
    ]
  },

  {
    id:          'orion-triptico',
    categoria:   'impresos',
    titulo:      'Orión Residences',
    subtitulo:   '— Tríptico de ventas',
    etiqueta:    'Impresos · Bavarian Group · 2025',
    cliente:     'Bavarian Real Estate',
    año:         '2025',
    servicios:   'Diseño de tríptico · Maquetación · Mockups',
    descripcion: 'Tríptico de ventas para Orión Punta Cana Residences. Material de presentación para comercialización del proyecto.',
    cover:       BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - doblado 1.jpg',
    imagenes: [
      BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - doblado 1.jpg',
      BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - vista doblado 2.jpg',
      BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - vista exterior .jpg',
      BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - vista interior.jpg',
      BASE + 'ORIÓN - proyecto inmobilairio/Parte trasera.jpg',
    ]
  },

  {
    id:          'forest-cartel',
    categoria:   'impresos',
    titulo:      'Forest Punta Cana',
    subtitulo:   '— Cartel publicitario',
    etiqueta:    'Cartelería · Bavarian Group · 2025',
    cliente:     'Bavarian Real Estate',
    año:         '2025',
    servicios:   'Diseño gráfico · Gran formato · Cartelería exterior · Mockup',
    descripcion: 'Cartel publicitario en gran formato para el proyecto residencial Forest Punta Cana.',
    cover:       BASE + 'FOREST - proyecto inmobiliario/Mockup - cartel - 2.jpg',
    imagenes: [
      BASE + 'FOREST - proyecto inmobiliario/Mockup - cartel - 2.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Mockup - cartel.jpg',
    ]
  },

  {
    id:          'forest-revista',
    categoria:   'impresos',
    titulo:      'Forest Punta Cana',
    subtitulo:   '— Revista editorial',
    etiqueta:    'Editorial · Bavarian Group · SIMA 2026',
    cliente:     'Bavarian Real Estate',
    año:         '2025 – 2026',
    servicios:   'Diseño editorial · Maquetación · Composición fotográfica · Tipografía · SIMA 2026 Madrid',
    descripcion: 'Revista de ventas diseñada para la presentación del proyecto en el Salón Inmobiliario Internacional de Madrid (SIMA 2026).',
    cover:       BASE + 'MATERIAL PARA SIMA 2026/FOREST - revista/pagina-01.jpg',
    imagenes:    paginas(BASE + 'MATERIAL PARA SIMA 2026/FOREST - revista/', 24)
  },

  {
    id:          'tareya-revista',
    categoria:   'impresos',
    titulo:      'Tareya Rural Living',
    subtitulo:   '— Revista editorial',
    etiqueta:    'Editorial · Bavarian Group · SIMA 2026',
    cliente:     'Bavarian Real Estate',
    año:         '2025 – 2026',
    servicios:   'Diseño editorial · Maquetación · Identidad de marca aplicada · SIMA 2026 Madrid',
    descripcion: 'Revista de ventas diseñada para la presentación del proyecto en SIMA 2026, Madrid.',
    cover:       BASE + 'MATERIAL PARA SIMA 2026/TAREYA - revista/pagina-01.jpg',
    imagenes:    paginas(BASE + 'MATERIAL PARA SIMA 2026/TAREYA - revista/', 24)
  },

  {
    id:          'orion-revista',
    categoria:   'impresos',
    titulo:      'Orión Residences',
    subtitulo:   '— Revista editorial',
    etiqueta:    'Editorial · Bavarian Group · SIMA 2026',
    cliente:     'Bavarian Real Estate',
    año:         '2025 – 2026',
    servicios:   'Diseño editorial · Maquetación · Tipografía · SIMA 2026 Madrid',
    descripcion: 'Revista de ventas diseñada para la presentación del proyecto en SIMA 2026, Madrid.',
    cover:       BASE + 'MATERIAL PARA SIMA 2026/ORION - revista/pagina-01.jpg',
    imagenes:    paginas(BASE + 'MATERIAL PARA SIMA 2026/ORION - revista/', 24)
  },

  // ── MOCKUP ────────────────────────────────────────────

  {
    id:          'mockups',
    categoria:   'mockup',
    titulo:      'Mockups',
    subtitulo:   '— Todos los proyectos',
    etiqueta:    'Mockup · Bavarian Group · Drive Pádel · 2025',
    cliente:     'Bavarian Group · Drive Pádel Sevilla',
    año:         '2025',
    servicios:   'Mockup de carteles · Trípticos · Packaging · Señalética · Camisetas · Bolsas',
    descripcion: 'Colección de mockups realizados para todos los proyectos: Forest, Orión, Tareya y Drive Pádel.',
    cover:       BASE + 'FOREST - proyecto inmobiliario/Mockup - cartel - 2.jpg',
    imagenes: [
      BASE + 'FOREST - proyecto inmobiliario/Mockup - cartel - 2.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Mockup - cartel.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Doblado.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte delantera - Forest abierto.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte interior.jpg',
      BASE + 'FOREST - proyecto inmobiliario/Parte trasera.jpg',
      BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - doblado 1.jpg',
      BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - vista doblado 2.jpg',
      BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - vista exterior .jpg',
      BASE + 'ORIÓN - proyecto inmobilairio/ORIÓN - Mockup tríptico - vista interior.jpg',
      PADEL + 'mockup - 4-2.jpg',
      PADEL + 'mockup - 2.jpg',
      PADEL + 'mockup 3.jpg',
      PADEL + 'mockup.jpg',
    ]
  },

];
