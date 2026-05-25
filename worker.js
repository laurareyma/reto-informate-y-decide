/**
 * Cloudflare Worker — Proxy para Google Gemini (capa gratuita)
 *
 * INSTRUCCIONES DE DESPLIEGUE:
 * 1. Ve a https://dash.cloudflare.com/ y crea una cuenta gratuita.
 * 2. En el panel, ve a "Workers & Pages" → "Create" → "Create Worker".
 * 3. Selecciona todo el código por defecto (Ctrl+A), bórralo y pega este archivo.
 * 4. Haz clic en "Deploy".
 * 5. Ve a "Settings" → "Variables and Secrets" → agrega:
 *      Nombre: GEMINI_API_KEY
 *      Valor:  tu clave de https://aistudio.google.com/app/apikey
 * 6. Copia la URL del Worker (ej: https://poli.tu_usuario.workers.dev)
 * 7. En main.js línea 194, reemplaza 'TU_WORKER_URL_AQUI' con esa URL.
 */

const GEMINI_MODEL = 'gemini-2.0-flash';

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Método no permitido', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('JSON inválido', { status: 400 });
    }

    // Convierte el formato Anthropic → Gemini
    const geminiBody = {
      system_instruction: body.system
        ? { parts: [{ text: body.system }] }
        : undefined,
      contents: (body.messages || []).map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      })),
      generationConfig: {
        maxOutputTokens: body.max_tokens || 1000,
      },
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`;

    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody),
    });

    const geminiData = await geminiRes.json();

    // Convierte la respuesta Gemini → formato Anthropic (para que main.js no cambie)
    const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No pude responder 😅';
    const anthropicFormat = {
      content: [{ type: 'text', text }],
    };

    return new Response(JSON.stringify(anthropicFormat), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
