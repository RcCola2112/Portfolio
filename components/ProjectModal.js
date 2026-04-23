export default function ProjectModal({project, onClose}){
  if(!project) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 max-w-3xl w-full p-6 rounded">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <button onClick={onClose}>Close</button>
        </div>
        <p className="text-muted mt-3">{project.desc}</p>
        <h4 className="mt-4 font-semibold">Features</h4>
        <ul className="list-disc ml-6 text-sm mt-2 text-muted">
          <li>Role-based access</li>
          <li>Real-time tracking</li>
          <li>Analytics dashboard</li>
        </ul>
        <div className="mt-4 grid md:grid-cols-3 gap-2">
          <img src="/images/1by1.jpg" alt="screenshot" />
          <img src="/images/1by1.jpg" alt="screenshot" />
          <img src="/images/1by1.jpg" alt="screenshot" />
        </div>
        <div className="mt-4 flex gap-2">
          {project.tech && project.tech.map(t=> <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">{t}</span>)}
        </div>
      </div>
    </div>
  )
}
