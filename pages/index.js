import Link from 'next/link'
import { useEffect, useState } from 'react'

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
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>cine-familia-2026</h1>
        <nav>
          <Link href="/login"><a style={{ marginRight: 12 }}>Admin</a></Link>
        </nav>
      </header>

      <p>Aplicativo de streaming — versão inicial (exemplo Web)</p>

      <section style={{ display: 'flex', gap: 20 }}>
        <div style={{ flex: 1 }}>
          <h2>Catálogo</h2>
          {videos.length === 0 && <p>Carregando vídeos...</p>}
          <ul>
            {videos.map((v) => (
              <li key={v.id} style={{ marginBottom: 8 }}>
                <button onClick={() => setCurrent(v.url)} style={{ cursor: 'pointer' }}>{v.title}</button>
                {' '}
                <a href={v.url} download style={{ marginLeft: 8 }}>[Download]</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 2 }}>
          <h2>Player</h2>
          {current ? (
            <div>
              <video key={current} controls width="720">
                <source src={current} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          ) : (
            <p>Escolha um vídeo do catálogo</p>
          )}
        </div>
      </section>
    </main>
  )
}
