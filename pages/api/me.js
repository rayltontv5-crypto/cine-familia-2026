export default async function handler(req, res) {
  const cookies = req.headers.cookie || ''
  const auth = cookies.includes('cine_auth=1')
  res.status(200).json({ auth })
}
