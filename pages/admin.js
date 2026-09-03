import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Admin() {
  const [authChecked, setAuthChecked] = useState(false)
  const [videos, setVideos] = useState([])
  const [file, setFile] = useState(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/me')
      .then((r) => r.json())
      .then((data) => {
        if (!data.auth) {
          router.push('/login')
        } else {
          setAuthChecked(true)
          loadVideos()
        }
      })
  }, [])

  async function loadVideos() {
    const res = await fetch('/api/videos')
    const list = await res.json()
    setVideos(list)
  }

  async function upload(e) {
    e.preventDefault()
    if (!file) return
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/upload', { method: 'POST', body: fd })
    if (res.ok) {
      setFile(null)
      loadVideos()
    } else {
      alert('Erro no upload')
    }
  }

  async function logout() {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/')
  }

  if (!authChecked) return <p>Verificando autenticação...</p>

  return (
    <main style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Painel Admin</h1>
      <button onClick={logout} style={{ marginBottom: 12 }}>Logout</button>

      <section style={{ marginBottom: 20 }}>
        <h2>Enviar vídeo</h2>
        <form onSubmit={upload}>
          <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          <div style={{ marginTop: 8 }}>
            <button type="submit">Upload</button>
          </div>
        </form>
      </section>

      <section>
        <h2>Vídeos enviados</h2>
        {videos.length === 0 && <p>Nenhum vídeo encontrado</p>}
        <ul>
          {videos.map((v) => (
            <li key={v.id} style={{ marginBottom: 8 }}>
              <a href={v.url}>{v.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
