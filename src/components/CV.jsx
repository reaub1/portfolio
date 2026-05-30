import './CV.css'

function CV() {
  return (
    <section id="cv" className="cv-wrapper">
      <h2>Resume</h2>
      <div className="cv-content">
        <div className="cv-header">
          <h3>Robin Bechlem</h3>
          <p>Software Engineer – Information Systems &amp; Data | Nationality: CH - FR</p>
          <p>
            <a href="mailto:robin.bechlem@gmail.com">robin.bechlem@gmail.com</a>
            {' · '}
            <a href="https://www.linkedin.com/in/robin-bechlem-7b948b1b9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <a className="cv-download-btn" href="/CV_BECHLEM_Robin_FR.pdf" download>
            ↓ Download CV (French version)
          </a>
          <a className="cv-download-btn" href="/CV_BECHLEM_Robin_EN.pdf" download>
            ↓ Download CV (English version)
          </a>
        </div>

        <div className="cv-section fade-in">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <span className="timeline-date">2023 – Present</span>
              <div className="timeline-content">
                <h4>Engineering degree in Computer Science</h4>
                <p className="timeline-org">CNAM EI, Eckbolsheim, France</p>
                <p>Advanced algorithms, SOLID, TDD, Business Intelligence, information systems, project management, AI.</p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <span className="timeline-date">2022 – 2023</span>
              <div className="timeline-content">
                <h4>Bachelor's degree in Computer Science</h4>
                <p className="timeline-org">CNAM Grand Est, Strasbourg, France</p>
                <p>Report writing and presentation.</p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <span className="timeline-date">2020 – 2022</span>
              <div className="timeline-content">
                <h4>DUT in Computer Science with scientific specialization</h4>
                <p className="timeline-org">IUT Robert-Schuman, Illkirch-Graffenstaden, France</p>
                <p>Software design, image processing, AI, supervised project.</p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <span className="timeline-date">2017 – 2020</span>
              <div className="timeline-content">
                <h4>Baccalaureate in Economic and Social Sciences</h4>
                <p className="timeline-org">Lycée polyvalent Jean-Jacques Henner, Altkirch, France</p>
                <p>Honors: Mention Bien.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cv-section fade-in">
          <h3>Final-Year Projects (Safran Landing Systems)</h3>
          <div className="cv-item">
            <h4>2025 – 2026 · Vérac – Application portal and access management for MRO France</h4>
            <p><em>.NET 10 / Vue.js / LDAP / GitLab CI/CD – Molsheim</em></p>
            <p>Built a layered Clean Architecture (domain, business, data access, API, client) with dedicated test projects. Integrated Windows/SSO authentication via LDAP and SQL Server. Applied TDD and set up a GitLab CI/CD pipeline.</p>
          </div>
          <div className="cv-item">
            <h4>2024 – 2026 · OptiPlanif – Redesign of MRO Supply Chain Planning</h4>
            <p><em>Power BI / SQL Server / DAX – Molsheim</em></p>
            <p>Replaced the legacy planning system with a Power BI reporting solution backed by SQL Server views. Modeled business rules (BPMN, Draw.io) and designed the underlying data architecture. Deployed to production for the MRO France Supply Chain.</p>
          </div>
        </div>

        <div className="cv-section fade-in">
          <h3>Academic Projects</h3>
          <div className="cv-item">
            <h4>March 2025 – SMART – Product recognition using computer vision</h4>
            <p><em>Python / Computer Vision</em></p>
            <p>Built automatic recognition of a predefined set of products.</p>
          </div>
          <div className="cv-item">
            <h4>January 2025 – TaxiBrousse – Internal carpooling application for Alcatel-Lucent Enterprise</h4>
            <p><em>Android Studio</em></p>
            <p>Developed a mobile carpooling app (similar to BlaBlaCar) for internal company use, with backend hosted on Vercel.</p>
          </div>
          <div className="cv-item">
            <h4>November 2024 – Shell Project</h4>
            <p>Reproduced a POSIX-compliant shell in C. Engineering school project.</p>
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

        <div className="cv-section fade-in">
          <h3>Skills</h3>
          <div className="cv-skills">
            <div>
              <h4>Programming Languages</h4>
              <div className="skill-badges">
                {['C', 'C++', 'C#', 'Python', 'SQL', 'T-SQL', 'JavaScript', 'HTML/CSS', 'Bash', 'LaTeX'].map((s) => (
                  <span key={s} className="skill-badge skill-badge--lang">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4>Frameworks & Libraries</h4>
              <div className="skill-badges">
                {['.NET', 'ASP.NET Core', 'Vue.js', 'Entity Framework Core', 'React', 'Unity', 'SDL2'].map((s) => (
                  <span key={s} className="skill-badge skill-badge--framework">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4>Data & BI</h4>
              <div className="skill-badges">
                {['SQL Server', 'Power BI', 'DAX', 'ETL', 'Data Warehouse', 'Data Modeling', 'Reporting'].map((s) => (
                  <span key={s} className="skill-badge skill-badge--area">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4>Practices</h4>
              <div className="skill-badges">
                {['OOP', 'SOLID', 'Design Patterns', 'Clean Architecture', 'TDD', 'CI/CD', 'Git'].map((s) => (
                  <span key={s} className="skill-badge skill-badge--soft">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4>Tools</h4>
              <div className="skill-badges">
                {['Visual Studio', 'VS Code', 'GitLab', 'GitHub', 'LeanIX', 'Microsoft Office', 'Access'].map((s) => (
                  <span key={s} className="skill-badge skill-badge--tool">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4>Domains</h4>
              <div className="skill-badges">
                {['Software Development', 'Web Development', 'Business Intelligence', 'Database Management', 'Data Analysis'].map((s) => (
                  <span key={s} className="skill-badge skill-badge--area">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4>Languages</h4>
              <div className="skill-badges">
                <span className="skill-badge skill-badge--lang">French (native)</span>
                <span className="skill-badge skill-badge--lang">English (fluent)</span>
                <span className="skill-badge skill-badge--lang">German (basic)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cv-section fade-in">
          <h3>Professional Experience</h3>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <span className="timeline-date">Sept. 2023 – Present</span>
              <div className="timeline-content">
                <h4>Apprentice Software Engineer <span className="flag-icon">🇫🇷</span></h4>
                <p className="timeline-org">Safran Landing Systems – SLS Information Systems, Molsheim, France</p>
                <p>Develop and maintain information system applications supporting MRO (Maintenance, Repair &amp; Overhaul) France operations. Design and deploy Power BI dashboards backed by SQL Server views and DAX measures. Train business teams on data warehouse tools and contribute to information systems project management.</p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <span className="timeline-date">Aug. – Oct. 2025</span>
              <div className="timeline-content">
                <h4>Software Engineering Intern – International Mobility <span className="flag-icon">🇬🇧</span></h4>
                <p className="timeline-org">Safran Landing Systems, Gloucester, United Kingdom</p>
                <p>Mapped the site's application landscape and enterprise architecture in LeanIX (SAP).</p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <span className="timeline-date">Apr. – Jun. 2022</span>
              <div className="timeline-content">
                <h4>Developer Intern <span className="flag-icon">🇫🇷</span></h4>
                <p className="timeline-org">LPB Conseil, Strasbourg, France</p>
                <p>Developed Power BI dashboards and maintained ERP software.</p>
              </div>
            </div>
            <div className="timeline-item fade-in">
              <span className="timeline-date">Jul. – Aug. 2018–2021</span>
              <div className="timeline-content">
                <h4>Warehouse Worker <span className="flag-icon">🇨🇭</span></h4>
                <p className="timeline-org">Robusta Flex, Basel, Switzerland</p>
                <p>Managed a Kanban stock system and performed various team-based handling tasks.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cv-section fade-in">
          <h3>Activities</h3>
          <p>Participated in "Nuit de l'Informatique" (2021, 2023, 2024, 2025), awarded a gold medal in a challenge. Participated in AWS GameDay – Frugality Fest (December 2024).</p>
        </div>

        <div className="cv-section fade-in">
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