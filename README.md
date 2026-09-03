# cine-familia-2026
Aplicativo de Streaming Multiplataforma

Este repositório agora contém um scaffold inicial de uma Web App baseada em Next.js. É um ponto de partida para um aplicativo de streaming; inclui uma interface simples para listar e reproduzir vídeos (com fontes de exemplo). Siga as instruções abaixo para rodar localmente.

## Como rodar (desenvolvimento)
1. Instale Node.js 18+.
2. No diretório do projeto rode:

```bash
npm install
npm run dev
```

3. Abra http://localhost:3000

## Próximos passos sugeridos
- Decidir onde hospedar e armazenar vídeos (S3/Cloud Storage) e integrar CDN.
- Implementar autenticação e assinaturas (ex.: NextAuth + Stripe).
- Adicionar transcodificação e suporte a múltiplos rendimentos (HLS/DASH) e player (video.js, hls.js).
