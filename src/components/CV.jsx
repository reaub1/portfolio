import './CV.css'

function CV() {
  return (
    <section id="cv">
      <h2>Resume</h2>
      <div className="cv-content">
        <div className="cv-header">
          <h3>Robin Bechlem</h3>
          <p>29a, rue de la Chapelle, 68480 Koestlach, France</p>
          <p>+33 6 38 60 81 36 | robin.bechlem@gmail.com</p>
          <p>Nationality: CH - FR | Computer Science Student</p>
        </div>

        <div className="cv-section">
          <h3>Education</h3>
          <div className="cv-item">
            <h4>2023–Present: Engineering degree in Computer Science, CNAM EI, Eckbolsheim, France</h4>
            <p>Advanced algorithms, advanced design, data structures, SOLID programming, project management, advanced systems, management, business management.</p>
          </div>
          <div className="cv-item">
            <h4>2022–2023: Bachelor's degree in Computer Science, CNAM Grand Est, Strasbourg, France</h4>
            <p>Report writing and presentation.</p>
          </div>
          <div className="cv-item">
            <h4>2020–2022: DUT in Computer Science with scientific specialization, IUT Robert-Schuman, Illkirch-Graffenstaden, France</h4>
            <p>Supervised project.</p>
          </div>
          <div className="cv-item">
            <h4>2017–2020: Baccalaureate in Economic and Social Sciences, Lycée polyvalent Jean-Jacques Henner, Altkirch, France</h4>
            <p>Honors: Mention Bien.</p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Projects</h3>
          <div className="cv-item">
            <h4>November 2025 – Shell Project</h4>
            <p>Reproduced a shell in C. Engineering school project.</p>
          </div>
          <div className="cv-item">
            <h4>September 2024 – OniDefense</h4>
            <p>Tower Defense game using Design Patterns, developed with Unity. Engineering school project.</p>
          </div>
          <div className="cv-item">
            <h4>June 2024 – CrossyRoad</h4>
            <p>Crossy Road-like game using Unity. Engineering school project.</p>
          </div>
          <div className="cv-item">
            <h4>May 2024 – QuizApp</h4>
            <p>Android Studio application. Engineering school project.</p>
          </div>
          <div className="cv-item">
            <h4>March 2024 – Arkanoid</h4>
            <p>Implemented Arkanoid game in C with SDL2. Engineering school project.</p>
          </div>
          <div className="cv-item">
            <h4>March 2023 – Scheduler</h4>
            <p>Implemented a task scheduler in Shell. Bachelor's project.</p>
          </div>
          <div className="cv-item">
            <h4>June 2022 – Project T4</h4>
            <p>Created a game in 4 days using Python. DUT project.</p>
          </div>
          <div className="cv-item">
            <h4>January 2022 – Kingdomino</h4>
            <p>Domino game exploring Design Patterns. DUT project.</p>
          </div>
          <div className="cv-item">
            <h4>November 2021 – City NDG</h4>
            <p>Unity game development project. DUT project.</p>
          </div>
          <div className="cv-item">
            <h4>March 2020 – Ant Colony Simulation</h4>
            <p>Simulated an ant colony in Java to learn OOP. DUT project.</p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Skills</h3>
          <div className="cv-skills">
            <div>
              <h4>Programming Languages</h4>
              <p>C/C++, C#, Java, Python, HTML/CSS, PHP, JavaScript, SQL, LaTeX, Bash, VBA.</p>
            </div>
            <div>
              <h4>Areas</h4>
              <p>Image processing, Artificial Intelligence, Systems & Networks, OOP, Graphics, Web & software development.</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>Visual Studio, Code::Blocks, Git, Adobe Suite, Office Suite.</p>
            </div>
            <div>
              <h4>Languages</h4>
              <p>French (native), English (intermediate), German (basic).</p>
            </div>
            <div>
              <h4>Soft Skills</h4>
              <p>Teamwork, Adaptability, Flexibility, Autonomy.</p>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <h3>Professional Experience</h3>
          <div className="cv-item">
            <h4>September 2022–Present – Computer engineering apprentice, Safran Landing Systems, Molsheim, France</h4>
            <p>Application development, software maintenance, Power BI dashboards, IT project management, Data Warehouse training for employees.</p>
          </div>
          <div className="cv-item">
            <h4>April–June 2022 – Developer Intern, LPB Conseil, Strasbourg, France</h4>
            <p>Developed Power BI dashboards, maintained ERP software.</p>
          </div>
          <div className="cv-item">
            <h4>July–August 2018–2021 – Warehouse Worker, Robusta Flex, Basel, Switzerland</h4>
            <p>Managed a Kanban stock system and performed various team-based handling tasks.</p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Activities</h3>
          <p>Participated in "Nuit de l'Informatique" (2021, 2023, 2024, 2025), awarded a gold medal in a challenge. Participated in AWS GameDay – Frugality Fest (December 2024).</p>
        </div>

        <div className="cv-section">
          <h3>Interests</h3>
          <div>
            <h4>Hobbies</h4>
            <p>Cinema, Literature, Digital Creation.</p>
          </div>
          <div>
            <h4>Sports</h4>
            <p>Gym, Running.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV