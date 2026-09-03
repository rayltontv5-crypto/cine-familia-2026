export default async function handler(req, res) {
  // logout
  res.setHeader('Set-Cookie', 'cine_auth=; Path=/; HttpOnly; Max-Age=0')
  res.status(200).json({ ok: true })
}
