
function App() {

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Brandon Marshall</h1>
        <p className="portfolio-subtitle">Web Developer | Designer | Programmer</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Brief introduction about yourself, your skills, and your passion for web development.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div>
          <div>
            <h3>Project One</h3>
            <p>Short description of your project.</p>
            <a href="#">View on GitHub</a>
          </div>
          <div>
            <h3>Project Two</h3>
            <p>Short description of your project.</p>
            <a href="#">View on GitHub</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:brandonmarshall666@gmail.com">brandonmarshall666@gmail.com</a></p>
        <p>LinkedIn: <a href="">Your LinkedIn</a></p>
      </section>

      <footer style={{ borderTop: '1px solid #eee', paddingTop: 16, color: '#888', fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>

  )
}

export default App
