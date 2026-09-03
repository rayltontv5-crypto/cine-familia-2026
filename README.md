# cine-familia-2026
Aplicativo de Streaming Multiplataforma

Este repositório contém um scaffold de uma Web App baseada em Next.js que permite listar, reproduzir e fazer upload local de vídeos (MVP). Projetado para rodar localmente — uploads são salvos em public/uploads.

## Como rodar (desenvolvimento)
1. Instale Node.js 18+.
2. Clone o repositório e entre na pasta:

```bash
git clone https://github.com/rayltontv5-crypto/cine-familia-2026.git
cd cine-familia-2026
```

3. Instale dependências e rode em modo dev:

```bash
npm install
npm run dev
```

4. Abra http://localhost:3000

## Conta administrativa
- Página de login: http://localhost:3000/login
- Senha padrão: `admin123` (use `.env.local` para alterar)

Crie `.env.local` com:

```
ADMIN_PASSWORD=suasenhaaqui
```

## Uploads e vídeos
- Vídeos enviados via painel admin são salvos em `public/uploads` e ficam disponíveis na lista de catálogo.
- Para produção, substitua o armazenamento local por S3/Cloud Storage e adicione transcodificação/HLS.

## Download do código
Você pode baixar o código pronto (branch main) como ZIP:

https://github.com/rayltontv5-crypto/cine-familia-2026/archive/refs/heads/main.zip

---

Próximos passos recomendados: adicionar autenticação com NextAuth, integração com Stripe para assinaturas, configuração de armazenamento em S3 e pipeline de transcodificação (FFmpeg/HLS).