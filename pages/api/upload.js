import formidable from 'formidable'
import fs from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadDir = path.join(process.cwd(), '/public/uploads')

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  // Simple auth check using cookie
  const cookies = req.headers.cookie || ''
  if (!cookies.includes('cine_auth=1')) {
    return res.status(401).json({ error: 'not authorized' })
  }

  await fs.promises.mkdir(uploadDir, { recursive: true })

  const form = new formidable.IncomingForm({ multiples: false, uploadDir, keepExtensions: true })
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'upload error' })
    }

    // formidable already saved the file to uploadDir, return file info
    const file = files.file
    const filename = Array.isArray(file) ? file[0].newFilename : file.newFilename
    res.status(200).json({ ok: true, filename })
  })
}
