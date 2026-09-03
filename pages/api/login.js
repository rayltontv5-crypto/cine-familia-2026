export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { ADMIN_PASSWORD = 'admin123' } = process.env
  const { password } = req.body

  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ ok: false })
  }

  // set cookie
  res.setHeader('Set-Cookie', 'cine_auth=1; Path=/; HttpOnly')
  res.status(200).json({ ok: true })
}
