import fs from 'fs'
import path from 'path'

const uploadsDir = path.join(process.cwd(), '/public/uploads')

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await fs.promises.mkdir(uploadsDir, { recursive: true })
      const files = await fs.promises.readdir(uploadsDir)
      const videos = files.filter((f) => f.match(/\.(mp4|m4v|mov|webm)$/i)).map((f) => ({
        id: f,
        title: f,
        url: `/uploads/${encodeURIComponent(f)}`
      }))

      // If no uploaded files, return example videos
      if (videos.length === 0) {
        return res.status(200).json([
          {
            id: 'flower',
            title: 'Vídeo de exemplo — Flower',
            url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          },
          {
            id: 'bigbuck',
            title: 'Vídeo de exemplo — Big Buck Bunny (trecho)',
            url: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
          }
        ])
      }

      return res.status(200).json(videos)
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: 'reading uploads failed' })
    }
  }

  return res.status(405).end()
}
