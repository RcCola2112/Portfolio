import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ProjectModal from '../components/ProjectModal'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home(){
  const [openProject, setOpenProject] = useState(null)

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <Head>
        <title>Roxas, John Rc Denver M. — Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Roxas John Rc Denver M. — Full-Stack Developer, BSIT student. Web & mobile development, capstone projects, real-time systems." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#0b69ff" />
        <meta property="og:title" content="Roxas John Rc Denver M. — Full-Stack Developer" />
        <meta property="og:description" content="Portfolio showcasing web & mobile projects, skills and contact information." />
      </Head>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Projects onOpen={(p)=> setOpenProject(p)} />
        <Skills />
        <Contact />
      </main>
      <Footer />

      <ProjectModal project={openProject} onClose={()=> setOpenProject(null)} />
    </div>
  )
}
