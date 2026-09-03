export default function handler(req, res) {
  // Lista de vídeos de exemplo. Substitua pelos seus URLs (S3/Cloud/URL público).
  const videos = [
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
  ]

  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(videos))
}
