import { useEffect, useState } from 'react'

function VideoPlayer({ src }) {
  if (!src) return null
  return (
    <div>
      <video key={src} controls width="720">
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  )
}

export default function Home() {
  const [videos, setVideos] = useState([])
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    fetch('/api/videos')
      .then((r) => r.json())
      .then(setVideos)
  }, [])

  return (
    <main style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>cine-familia-2026</h1>
      <p>Aplicativo de streaming — versão inicial (exemplo Web)</p>

      <section style={{ display: 'flex', gap: 20 }}>
        <div style={{ flex: 1 }}>
          <h2>Catálogo</h2>
          {videos.length === 0 && <p>Carregando vídeos...</p>}
          <ul>
            {videos.map((v) => (
              <li key={v.id} style={{ marginBottom: 8 }}>
                <button onClick={() => setCurrent(v.url)} style={{ cursor: 'pointer' }}>{v.title}</button>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 2 }}>
          <h2>Player</h2>
          {current ? (
            <VideoPlayer src={current} />
          ) : (
            <p>Escolha um vídeo do catálogo</p>
          )}
        </div>
      </section>
    </main>
  )
}
