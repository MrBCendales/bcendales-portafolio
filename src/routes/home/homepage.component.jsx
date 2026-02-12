import { Link } from "react-router-dom";
import { EN } from "../../locales/lang/en";
import "./homepage.styles.scss";

const HomePage = () => {
  const STRINGS = EN.HOME; // 'T' for 'TEXTS'

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{STRINGS.HERO.TITLE}</h1>
          <h2 className="hero-subtitle">{STRINGS.HERO.SUBTITLE}</h2>
          <p className="hero-description">{STRINGS.HERO.DESCRIPTION}</p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <div className="section-container">
          <h2 className="section-title">{STRINGS.TECH_STACK.TITLE}</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <span className="tech-name">React</span>
            </div>
            <div className="tech-card">
              <span className="tech-name">JavaScript</span>
            </div>
            <div className="tech-card">
              <span className="tech-name">SCSS</span>
            </div>
            <div className="tech-card">
              <span className="tech-name">Python</span>
              <span className="learning-badge">
                {STRINGS.TECH_STACK.LEARNING}
              </span>
            </div>
            <div className="tech-card">
              <span className="tech-name">AWS</span>
              <span className="learning-badge">
                {STRINGS.TECH_STACK.LEARNING}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">{STRINGS.PROJECTS.TITLE}</h2>
          <div className="projects-grid">
            {/* Roulette Project */}
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">
                  {STRINGS.PROJECTS.PROJECTS_DATA[0].TITLE}
                </h3>
                <p className="project-description">
                  {STRINGS.PROJECTS.PROJECTS_DATA[0].DESCRIPTION}
                </p>
                <div className="project-tech">
                  {STRINGS.PROJECTS.PROJECTS_DATA[0].TECH.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/roulette" className="project-button">
                {STRINGS.PROJECTS.TRY_LIVE}
              </Link>
            </div>

            {/* Payment Reminder Project */}
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">
                  {STRINGS.PROJECTS.PROJECTS_DATA[1].TITLE}
                </h3>
                <p className="project-description">
                  {STRINGS.PROJECTS.PROJECTS_DATA[1].DESCRIPTION}
                </p>
                <div className="project-tech">
                  {STRINGS.PROJECTS.PROJECTS_DATA[1].TECH.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/payment-reminder" className="project-button">
                {STRINGS.PROJECTS.TRY_LIVE}
              </Link>
            </div>

            {/* Simple Kitchen Project */}
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">
                  {STRINGS.PROJECTS.PROJECTS_DATA[2].TITLE}
                </h3>
                <p className="project-description">
                  {STRINGS.PROJECTS.PROJECTS_DATA[2].DESCRIPTION}
                </p>
                <div className="project-tech">
                  {STRINGS.PROJECTS.PROJECTS_DATA[2].TECH.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/simple-kitchen" className="project-button">
                {STRINGS.PROJECTS.TRY_LIVE}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
