import { useEffect, useRef, useState } from 'react'

export default function CertificatePreview({ file, fullScreen = false }) {
  const canvasRef = useRef(null)
  const [status, setStatus] = useState('Loading certificate...')

  useEffect(() => {
    let cancelled = false

    async function renderCertificate() {
      try {
        const pdfjs = await import('pdfjs-dist/legacy/build/pdf')
        pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
        const document = await pdfjs.getDocument(file).promise
        const page = await document.getPage(1)
        const viewport = page.getViewport({ scale: fullScreen ? 1.7 : 1.4 })
        const canvas = canvasRef.current
        if (!canvas || cancelled) return

        const context = canvas.getContext('2d')
        canvas.width = viewport.width
        canvas.height = viewport.height
        await page.render({ canvasContext: context, viewport }).promise
        if (!cancelled) setStatus('')
      } catch (error) {
        if (!cancelled) setStatus('Certificate preview unavailable')
      }
    }

    renderCertificate()
    return () => { cancelled = true }
  }, [file, fullScreen])

  return <div className={`certificate-canvas ${fullScreen ? 'certificate-canvas-full' : ''}`}>
    <canvas ref={canvasRef} aria-label="Certificate preview" />
    {status && <span>{status}</span>}
  </div>
}
