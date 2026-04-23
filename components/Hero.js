export default function Hero(){
  return (
    <section id="home" className="min-h-screen flex items-center" style={{paddingTop:72}}>
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Roxas, John Rc Denver M.</h1>
          <p className="text-primary mt-2 font-medium">Full-Stack Developer | BSIT Student</p>
          <p className="mt-6 text-muted max-w-xl">I build web and mobile applications with a focus on clean UI, performance, and reliable user experiences. Currently working on capstone and several freelance projects.</p>

          <div className="flex items-center gap-4 mt-6">
            <a href="https://web.facebook.com/RcRoxas2112/" target="_blank" rel="noreferrer" className="text-2xl">f</a>
            <a href="https://www.instagram.com/denvermartinezroxas/" target="_blank" rel="noreferrer" className="text-2xl">ig</a>
            <a href="https://github.com/RcCola2112" target="_blank" rel="noreferrer" className="text-2xl">gh</a>
            <a href="mailto:denvermartinez2112@gmail.com" className="text-2xl">✉️</a>
          </div>
        </div>

        <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg flex items-center justify-center">
          <img src="/images/1by1.jpg" alt="profile" className="rounded-md" />
        </div>
      </div>
    </section>
  )
}
