export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <header className="mb-6">
        <h1 className="text-3xl text-white font-bold mb-4">Pratik Bhagat</h1>
        <nav className="text-lg flex justify-end">
          <a href="/" className="mr-4 text-blue-600">
            About
          </a>
          <a href="/projects" className="mr-4 text-blue-600">
            Projects
          </a>
          <a href="/contact" className="text-blue-600">
            Contact
          </a>
        </nav>
      </header>
      <main></main>
    </div>
  );
}
