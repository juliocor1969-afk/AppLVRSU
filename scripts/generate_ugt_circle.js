import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1024x1024 high resolution circular badge with transparent background
const size = 1024;
const center = size / 2;
const radius = 480;

const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Clip to circular badge -->
    <clipPath id="circleClip">
      <circle cx="${center}" cy="${center}" r="${radius}" />
    </clipPath>

    <!-- Radial gradient for subtle glow/lighting -->
    <radialGradient id="redGlow" cx="65%" cy="65%" r="75%">
      <stop offset="0%" stop-color="#EF233C" />
      <stop offset="70%" stop-color="#D3122A" />
      <stop offset="100%" stop-color="#B00E20" />
    </radialGradient>

    <!-- Drop shadow for the white handshake icon -->
    <filter id="handShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>

  <!-- Circular Badge with faceted shading -->
  <g clip-path="url(#circleClip)">
    <!-- Base Red Fill -->
    <rect x="0" y="0" width="${size}" height="${size}" fill="url(#redGlow)" />

    <!-- 3D Geometric Facets on Top-Left Quadrant (Matching official UGT emblem) -->
    <!-- Dark Wine Red Facet 1 -->
    <polygon points="${center},${center} 140,220 280,70" fill="#7F0915" opacity="0.85" />
    <!-- Wine Red Facet 2 -->
    <polygon points="${center},${center} 280,70 ${center},32" fill="#9B0D1B" opacity="0.8" />
    <!-- Medium Red Facet 3 -->
    <polygon points="${center},${center} 70,380 140,220" fill="#8C0B18" opacity="0.75" />
    <!-- Ruby Red Facet 4 -->
    <polygon points="${center},${center} 40,512 70,380" fill="#A81020" opacity="0.7" />
    <!-- Deep Red Facet 5 -->
    <polygon points="${center},${center} 70,644 40,512" fill="#990E1D" opacity="0.6" />
    <!-- Top Edge Shading -->
    <polygon points="${center},${center} ${center},32 740,70" fill="#B51123" opacity="0.5" />
    <!-- Diagonal highlight slice -->
    <polygon points="${center},${center} 140,220 340,340" fill="#6A0711" opacity="0.5" />
  </g>

  <!-- Circular Outer Border Ring -->
  <circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="#B00E20" stroke-width="4" />

  <!-- Iconic Shaking Hands (Solid Pure White Vector Outlines, Exactly matching UGT emblem) -->
  <g transform="translate(${center}, ${center}) scale(2.4)" filter="url(#handShadow)">
    <!-- Top-Left Arm & Wrist & Hand -->
    <path
      d="
        M -195,-75
        C -130,-115 -50,-90 -10,-45
        L 28,-18
        C 52,-38 90,-42 122,-24
        C 152,-6 170,22 158,58
        C 142,92 104,106 64,94
        L 14,72
        C -16,84 -60,78 -90,56
        L -150,34
      "
      fill="none"
      stroke="#FFFFFF"
      stroke-width="19"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <!-- Clasped Palm Inner Detail -->
    <path
      d="
        M -38,18
        C -22,48 -2,58 24,42
        C 48,26 42,-8 16,-22
        C -4,-18 -18,-2 -24,18 Z
      "
      fill="none"
      stroke="#FFFFFF"
      stroke-width="15"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <!-- The 4 Distinct Clasped Fingers Wrapping Around the Hand -->
    <!-- Finger 1 -->
    <path d="M -48,46 C -42,66 -22,76 -2,66" fill="none" stroke="#FFFFFF" stroke-width="17" stroke-linecap="round" />
    <!-- Finger 2 -->
    <path d="M -18,68 C -12,88 8,96 28,86" fill="none" stroke="#FFFFFF" stroke-width="17" stroke-linecap="round" />
    <!-- Finger 3 -->
    <path d="M 14,86 C 20,104 40,110 58,96" fill="none" stroke="#FFFFFF" stroke-width="17" stroke-linecap="round" />
    <!-- Finger 4 -->
    <path d="M 46,96 C 54,112 72,114 88,98" fill="none" stroke="#FFFFFF" stroke-width="17" stroke-linecap="round" />

    <!-- Wrist Cuff Lines -->
    <path d="M -190,-50 L -140,-20" stroke="#FFFFFF" stroke-width="19" stroke-linecap="round" />
    <path d="M 185,-20 L 138,10" stroke="#FFFFFF" stroke-width="19" stroke-linecap="round" />
  </g>
</svg>
`;

async function run() {
  const publicPath = path.resolve('public/ugt.png');
  const resPath = path.resolve('res/drawable/ugt.png');
  const distPath = path.resolve('dist/ugt.png');

  await sharp(Buffer.from(svg))
    .png({ quality: 100 })
    .toFile(publicPath);

  fs.copyFileSync(publicPath, resPath);
  if (fs.existsSync('dist')) {
    fs.copyFileSync(publicPath, distPath);
  }

  // Delete previous logo files as requested: "Borra el anterior"
  const oldFiles = [
    'public/logo_ugt_vitoria.png',
    'res/drawable/logo_ugt_vitoria.png',
    'dist/logo_ugt_vitoria.png'
  ];

  for (const f of oldFiles) {
    if (fs.existsSync(f)) {
      fs.unlinkSync(f);
      console.log('Deleted old logo file:', f);
    }
  }

  console.log('Successfully created new logo at:', publicPath, resPath);
}

run().catch(console.error);
