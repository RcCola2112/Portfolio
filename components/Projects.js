import { useState } from 'react'

const projects = [
  {
    id: 'tuy',
    title: 'Tuy PureFlow',
    desc: 'Water delivery management system with analytics and real-time tracking.',
    tech: ['React','Node.js','MySQL','Socket.io']
  },
  {
    id: 'food',
    title: 'Food Delivery App',
    desc: 'Multi-role system with admin, restaurant, and rider apps.',
    tech: ['React Native','Node.js','Firebase']
  },
  {
    id: 'docs',
    title: 'Document Request System',
    desc: 'Municipal e-docs request system with interactive map.',
    tech: ['React','PHP','PostgreSQL']
  }
]

export default function Projects({onOpen}){
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {projects.map(p=> (
            <article key={p.id} className="p-4 border rounded hover:shadow-lg transition">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-muted mt-2">{p.desc}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {p.tech.map(t=> <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{t}</span>)}
              </div>
              <div className="mt-4 flex gap-2">
                {p.id === 'tuy' ? (
                  <a href="https://tuypureflow.com" target="_blank" rel="noreferrer" className="px-3 py-1 bg-primary text-white rounded">View Demo</a>
                ) : (
                  <button onClick={() => { setSelected(p); onOpen && onOpen(p) }} className="px-3 py-1 bg-primary text-white rounded">View Demo</button>
                )}
                <a href="#" className="px-3 py-1 border rounded">View Code</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
