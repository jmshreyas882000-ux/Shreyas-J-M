import { useEffect, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import "./App.css";

const data = {
  name: "Shreyas J M",
  title: "Full-Stack Developer",
  location: "Bengaluru, Karnataka, India",
  summary:
    "Computer Science graduate skilled in software development, full-stack web development, data structures, and system design. Experienced in building scalable applications using JavaScript, Python, React.js, and Node.js.",
  email: "jmshreyas882000@gmail.com",
  phone: "+91 82175 79165",
  github: "https://github.com/shreyas-jm-43850b261",
  linkedin: "https://www.linkedin.com/in/shreyas-jm-43850b261",
  resume: "/resume.pdf",
  photo: "/profile.jpg",
  skills: [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "C++",
    "MySQL",
    "MongoDB",
    "Redis",
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Data Structures",
    "OOP",
  ],
  projects: [
    {
      name: "URL Shortener System",
      desc: "Scalable URL shortening service with REST APIs, Redis caching, and MySQL analytics.",
      demo: "#",
      code: "#",
    },
    {
      name: "Real-Time Chat Application",
      desc: "Messaging platform with Socket.io, Node.js, Express.js, and MongoDB.",
      demo: "#",
      code: "#",
    },
    {
      name: "AI-Based Resume Screening System",
      desc: "Python and ML tool that extracts skills with NLP and ranks candidates by job descriptions.",
      demo: "#",
      code: "#",
    },
    {
      name: "Wireless Sensor Monitoring",
      desc: "IoT greenhouse monitoring using NodeMCU, Arduino, cloud integration, and alerts.",
      demo: "#",
      code: "#",
    },
    {
      name: "E-Commerce Web Application",
      desc: "Responsive shopping app with product listing, cart, and role-based authentication.",
      demo: "#",
      code: "#",
    },
  ],
  experience:
    "Software Developer Intern at Ekathva Innovation — Built React features, REST APIs with Node.js and Express.js, collaborated with Git/GitHub, and improved performance through testing and debugging.",
  education:
    "B.E. in Computer Science and Engineering, S J M Institute of Technology — CGPA 7.9",
  certifications: [
    "Front End Developer (React)",
    "Software Engineer",
    "Gen AI",
    "Data Science and Data Analytics",
  ],
};

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="page">
      <header className="nav glass">
        <div className="brand">{data.name}</div>

        <nav className="nav-links">
          <ScrollLink to="about" smooth spy activeClass="active">About</ScrollLink>
          <ScrollLink to="projects" smooth spy activeClass="active">Projects</ScrollLink>
          <ScrollLink to="experience" smooth spy activeClass="active">Experience</ScrollLink>
          <ScrollLink to="contact" smooth spy activeClass="active">Contact</ScrollLink>
        </nav>

        <div className="nav-actions">
          <a className="btn small" href={data.resume} download>Resume</a>
          <button className="btn small" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <main>
        <section className="hero glass fade-up">
          <div className="hero-copy">
            <div className="badge">Available for internships, freelance, and full-time roles</div>
            <h1>
              Building <span>modern web experiences</span> with React and Node.js.
            </h1>
            <p>{data.summary}</p>

            <div className="cta-row">
              <a className="btn primary" href={`mailto:${data.email}`}>Email Me</a>
              <a className="btn" href={data.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <aside className="hero-card glass">
            <div className="profile-wrap">
              <img src={data.photo} alt="Shreyas J M" className="profile-photo" />
            </div>
            <div className="stat">
              <div className="stat-label">Core Stack</div>
              <div className="stat-value">React + Node.js</div>
            </div>
            <div className="stat">
              <div className="stat-label">Focus</div>
              <div className="stat-value">Full-stack apps, APIs, UI</div>
            </div>
            <div className="stat">
              <div className="stat-label">Contact</div>
              <div className="stat-value">{data.email}</div>
            </div>
          </aside>
        </section>

        <Element name="about">
          <section className="grid">
            <div className="glass section fade-up delay-1">
              <h2>About</h2>
              <p>{data.summary}</p>
              <div className="tags">
                {data.skills.map((skill) => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass section fade-up delay-2">
              <h2>Contact</h2>
              <div className="contact-list">
                <div><strong>Email</strong><span>{data.email}</span></div>
                <div><strong>Phone</strong><span>{data.phone}</span></div>
                <div><strong>Location</strong><span>{data.location}</span></div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="projects">
          <section className="glass section fade-up delay-3">
            <h2>Featured Projects</h2>
            <div className="projects">
              {data.projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                    <a href={project.code} target="_blank" rel="noreferrer">Source Code</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Element>

        <Element name="experience">
          <section className="grid">
            <div className="glass section fade-up delay-4">
              <h2>Experience</h2>
              <div className="timeline-item">
                <h3>Software Developer Intern</h3>
                <p>Ekathva Innovation</p>
                <span>{data.experience}</span>
              </div>
            </div>

            <div className="glass section fade-up delay-5">
              <h2>Education & Certifications</h2>
              <div className="timeline-item">
                <h3>Education</h3>
                <span>{data.education}</span>
              </div>
              <div className="timeline-item">
                <h3>Certifications</h3>
                <span>{data.certifications.join(" · ")}</span>
              </div>
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section className="glass section fade-up delay-6">
            <h2>Contact</h2>
            <p className="contact-line">
              Email: <a href={`mailto:${data.email}`}>{data.email}</a> · Phone: {data.phone}
            </p>
          </section>
        </Element>
      </main>
    </div>
  );
}

export default App;
