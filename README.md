# Ross Digital Studio — V1

Sitio comercial de Ross Digital Studio, construido con Next.js App Router + TypeScript.

## Incluye

- Home comercial
- Sección /webs con planes y portfolio
- Sección /invitaciones con planes, funcionalidades y portfolio
- Sección /portfolio
- Responsive completo
- CTA y botón flotante de WhatsApp
- SEO básico y metadata Open Graph
- Portfolio real con proyectos de webs e invitaciones

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## Variables de entorno

Copiá `.env.example` a `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=54911XXXXXXXX
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/rossdigitalstudio/
```

El número de WhatsApp debe incluir código de país y área, sin `+`, espacios ni guiones.

Si no se configura `NEXT_PUBLIC_WHATSAPP_NUMBER`, los botones usan `wa.me` con el mensaje precargado pero sin destinatario fijo.

## Deploy en Vercel

1. Importar este repositorio en Vercel.
2. Framework preset: **Next.js**.
3. Agregar `NEXT_PUBLIC_WHATSAPP_NUMBER` en Environment Variables.
4. Deploy.

No requiere base de datos para esta V1.

## Precios cargados

### Webs
- Landing Express: $150.000
- Web Negocio: $300.000
- Web Personalizada: desde $500.000

### Invitaciones
- Modelo: $25.000
- Temática: $40.000
- Personalizada: $50.000

Los contenidos comerciales están centralizados en `lib/data.ts` para facilitar futuras modificaciones.
