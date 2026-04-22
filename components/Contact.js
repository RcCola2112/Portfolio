export default function Contact(){
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-muted mt-2">Feel free to reach out for collaboration or job opportunities.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form className="p-4 border rounded">
            <label className="block">Name</label>
            <input className="w-full p-2 mt-2 rounded border" placeholder="Your name" />
            <label className="block mt-3">Email</label>
            <input className="w-full p-2 mt-2 rounded border" placeholder="you@example.com" />
            <label className="block mt-3">Message</label>
            <textarea className="w-full p-2 mt-2 rounded border" rows={5} placeholder="Hi, I'd like to..." />
            <button type="button" className="mt-4 px-4 py-2 bg-primary text-white rounded">Send Message</button>
          </form>

          <div className="p-4 border rounded">
            <h3 className="font-semibold">Social</h3>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href="https://github.com/RcCola2112" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="mailto:denvermartinez2112@gmail.com">denvermartinez2112@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
