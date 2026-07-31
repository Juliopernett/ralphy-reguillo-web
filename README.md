# Ralphy Reguillo — Brochure Digital

Sitio oficial de Ralphy Reguillo. Next.js 16 + TypeScript + Tailwind + Framer Motion.
Publicado en `https://ralphyreguillo.portalvallenato.com` vía GitHub → Railway.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Contenido del sitio

Toda la información (biografía, logros, redes, galería, videos, contrataciones,
estadísticas, testimonios) vive en un solo archivo:

```
src/data/artist.ts
```

Edita ese archivo, guarda, y el sitio se actualiza. Las secciones marcadas con
`// TODO` en ese archivo usan datos de ejemplo — reemplázalas con información real
cuando esté disponible (discografía, estadísticas, testimonios, enlaces de
TikTok/Spotify/Apple Music).

## Agenda de presentaciones (dinámica, vía Google Sheets)

A diferencia del resto del contenido, la sección **"Próximas Presentaciones"** NO
se edita en el código — se lee automáticamente de una hoja de Google Sheets, para
que se pueda actualizar mes a mes sin tocar el código ni hacer un nuevo despliegue.

### Configurar la hoja (una sola vez)

1. Crea una hoja de Google Sheets con estas columnas exactas en la primera fila:

   | Fecha | Ciudad | Lugar | Evento | Estado |
   |---|---|---|---|---|
   | 15/08/2026 | Ciénaga | Plaza Principal | Fiestas Patronales | Confirmado |

   - **Fecha**: formato `DD/MM/AAAA`.
   - **Lugar**: opcional, si lo dejas vacío se muestra "Por confirmar".
   - **Estado**: uno de `Confirmado`, `Agotado` o `Próximamente`.
   - Agrega una fila por presentación. Las fechas pasadas se ocultan solas.

2. En Google Sheets: **Archivo → Compartir → Publicar en la Web**.
   - Selecciona la hoja correspondiente y el formato **Valores separados por comas (.csv)**.
   - Clic en **Publicar**, copia el enlace que te da.

3. En Railway → tu proyecto → **Variables**, agrega:

   ```
   GOOGLE_SHEET_EVENTS_URL = <el enlace que copiaste>
   ```

   Railway redesplegará automáticamente. El sitio revisa la hoja cada 30 minutos.

Si la variable no está configurada, o Google Sheets no responde, el sitio muestra
automáticamente las fechas de ejemplo definidas en `artist.ts` — la sección nunca
se rompe ni queda vacía.

## Despliegue

Cada `git push` a `main` en GitHub dispara un redeploy automático en Railway.

```bash
git add -A
git commit -m "mensaje descriptivo"
git push origin main
```
