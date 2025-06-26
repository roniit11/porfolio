import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Ronit Singh</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a 2nd year BTech Computer Science Engineering student passionate about software engineering and web development. I love building projects and learning new technologies to solve real-world problems.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Todo App – A simple task manager built with HTML, CSS, and JavaScript.</li>
            <li>Weather Forecast App – Get real-time weather updates using a public API.</li>
            <li>Portfolio Website – This personal website to showcase my work and skills.</li>
          </ul>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React</li>
            <li>Git & GitHub</li>
            <li>Python (basics)</li>
            <li>Problem Solving</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: kumargaurv.8603070@gmail.com</p>
          <p>LinkedIn: <a href="" target="_blank">LinkedIn Profile</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;
