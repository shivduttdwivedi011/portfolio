import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>This is where you can write about yourself, your skills, and your experience.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects">
            {/* List your projects here */}
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of project 1</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of project 2</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
