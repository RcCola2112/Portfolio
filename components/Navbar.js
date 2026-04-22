import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> setOpen(false)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const links = [
    {href:'#home',label:'Home'},
    {href:'#about',label:'About'},
    {href:'#projects',label:'Projects'},
    {href:'#skills',label:'Skills'},
    {href:'#contact',label:'Contact'}
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between glass rounded-b-md">
        <a href="#home" className="font-semibold text-xl text-primary">Rc Denver</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l=> (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-primary transition">{l.label}</a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button aria-label="menu" onClick={()=>setOpen(!open)} className="p-2 rounded-md">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 glass rounded-b-md mt-2">
          {links.map(l=> (
            <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
