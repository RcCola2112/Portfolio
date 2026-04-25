import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'

export default function Contact(){
  return (
    <footer id="contact" className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-primary font-semibold uppercase text-sm">Contact Us:</h3>
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <div className="flex items-center gap-2"><FiPhone /> <span>Tel: (632) 8631-1677</span></div>
            <div className="flex items-center gap-2"><FiPhone /> <span>Fax: (632) 8634-0772</span></div>
            <div className="flex items-center gap-2"><FiMail /> <a href="mailto:info@nazarenoarchitecture.design" className="hover:text-primary dark:hover:text-white">info@nazarenoarchitecture.design</a></div>
          </div>

          <div className="mt-5 flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <a href="https://web.facebook.com/RcRoxas2112/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-primary dark:hover:text-white"><FaFacebookF size={18} /></a>
            <a href="https://www.instagram.com/denvermartinezroxas/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary dark:hover:text-white"><FaInstagram size={18} /></a>
            <a href="https://github.com/RcCola2112" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary dark:hover:text-white"><FaGithub size={18} /></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary dark:hover:text-white"><FaLinkedin size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm">Address</h4>
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            10/F Strata 2000 Building,
            <br /> F. Ortigas Jr. Avenue,
            <br /> Ortigas Center, Pasig City
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm">Message</h4>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Feel free to reach out for collaboration or job opportunities.</p>
          <div className="mt-4 grid gap-2">
            <input aria-label="Name" placeholder="Name" className="bg-white border border-gray-200 p-2 rounded text-sm text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100" />
            <input aria-label="Email" placeholder="Email" className="bg-white border border-gray-200 p-2 rounded text-sm text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100" />
            <textarea aria-label="Message" placeholder="Message" rows={3} className="bg-white border border-gray-200 p-2 rounded text-sm text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100" />
            <button type="button" className="mt-2 self-start px-4 py-2 bg-primary text-white rounded">Send</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
