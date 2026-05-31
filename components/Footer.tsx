const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">KUNJ</h3>
            <p className="text-gray-300">Building beautiful digital experiences</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="space-y-2 text-gray-300">
              <p><a href="#" className="hover:text-white transition">GitHub</a></p>
              <p><a href="#" className="hover:text-white transition">Twitter</a></p>
              <p><a href="#" className="hover:text-white transition">LinkedIn</a></p>
              <p><a href="#" className="hover:text-white transition">Email</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Kunj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
