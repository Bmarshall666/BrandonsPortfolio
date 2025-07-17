import Project from "./components/Project.jsx";
import "./App.css";
import NavigationBar from "./components/NavigationBar.jsx";

function App() {

  const handleFocus = (event) => {
      event.preventDefault();
      // Find all sections in order
      const sections = Array.from(document.querySelectorAll(".focusable"));
      // Find the section currently in view (or closest to top)
      const scrollY = window.scrollY;
      const nextSection = sections.find(
        (section) => section.offsetTop > scrollY + 10
      );
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      } else if (sections.length > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
  }

  return (
    <div className="portfolio-container">
      <NavigationBar />

      <section className="section main-section">
        <h2>Brandon Marshall</h2>
        <h1 className="portfolio-subtitle">Web Developer | Programmer</h1>
        <button className="down-button" onClick={handleFocus}>
          <img src="downArrow.svg" alt="Down Arrow" />
        </button>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/brandon-marshall-365a5b232/">
            <img src="linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Bmarshall666">
            <img src="github.svg" alt="github" />
          </a>
        </div>
      </section>

      <section className="section about-section focusable">
        <h1>About Me</h1>
        <h2>
          Hi! I'm Brandon.
        </h2>
        <h3>
          I'm a software developer with passion for creating efficient and user-friendly applications.
        </h3>
        <button className="down-button" onClick={handleFocus}>
          <img src="downArrow.svg" alt="Down Arrow" />
        </button>
      </section>

      <section className="section skills-section focusable" >
        <h2>Skills</h2>
        <ul>
          <li>
            <div className="skill-item"> 
              <h3>HTML</h3>
              <img src="html.svg" alt="HTML" />
            </div>
          </li>
          
          <li>
            <div className="skill-item">
              <h3>JavaScript</h3>
              <img src="javascript.svg" alt="JavaScript" />
            </div>
          </li>
          <li>
            <div className="skill-item">
              <h3>C#</h3>
              <img src="csharp.svg" alt="C#" />
            </div>
          </li>
          <li>
            <div className="skill-item">
              <h3>.NET</h3>
              <img src="dotnet.svg" alt=".NET" />
            </div>
          </li>
          <li>
            <div className="skill-item">
              <h3>CSS</h3>
              <img src="css3.svg" alt="CSS" />
            </div>
          </li>
          <li>
            <div className="skill-item">
              <h3>React</h3>
              <img src="react.svg" alt="React" />
            </div>
          </li>
          <li>
            <div className="skill-item">
              <h3>Version Control </h3>
              <img src="git.svg" alt="GIT" />
            </div>
          </li>
        </ul>
        <button className="down-button" onClick={handleFocus}>
          <img src="downArrow.svg" alt="Down Arrow" />
        </button>
      </section>

      <section className="section projects-section focusable">
        <h2>Projects</h2>
        <div className="projects-container">

          <div className="project hyde-report" >
            <Project 
            Image="HydeReport.png"
            Title="Hyde Report"
            Description="A web application skaters to report on the conditon of the local skatepark."
            SiteLink="https://hydereport.runasp.net/"
            GithubLink="" />
          </div>
          
          <div className="project angel-cards">
            <Project 
            Image="AngelCard.png"
            Title="Angel Cards"
            Description="A simple card reading application."
            SiteLink="https://angelradiancecards.netlify.app/"
            GithubLink="" />
          </div>

          <div className="project cad-development">
            <Project 
            Title="CAD Development" 
            Description="Development of my CAD skills through various projects."
            GithubLink="" />
            </div>

          <div className="project cad-development">
            <Project 
            Title="Coming Soon" 
            Description="Web app for renting out dresses."
            />
          </div>
        </div>
        <button className="down-button" onClick={handleFocus}>
          <img src="downArrow.svg" alt="Down Arrow" />
        </button>
      </section>

      <section id="section contact-section focusable">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:brandonmarshall666@gmail.com">
            brandonmarshall666@gmail.com
          </a>
        </p>
        <p>
          LinkedIn: <a href="">Your LinkedIn</a>
        </p>
      </section>

      <footer
        style={{
          borderTop: "1px solid #eee",
          paddingTop: 16,
          color: "#888",
          fontSize: 14,
        }}
      >
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}


export default App;
