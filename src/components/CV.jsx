import './CV.css'

function CV() {
  return (
    <section id="cv">
      <h2>Mon CV</h2>
      <div className="cv-content">
        <div className="cv-header">
          <h3>Robin Bechlem</h3>
          <p>8, Rue d’andlau, 67000 Strasbourg, France</p>
          <p>+33 6 38 60 81 36 | robin.bechlem@gmail.com</p>
          <p>23 ans - Permis de conduire | Étudiant en Informatique</p>
        </div>

        <div className="cv-section">
          <h3>Formation</h3>
          <div className="cv-item">
            <h4>2023-Présent : Diplôme d'Ingénieur en Informatique, CNAM EI, Eckbolsheim, France.</h4>
            <p>Algorithmes avancés, conception avancée, structures de données, programmation SOLID, systèmes avancés, gestion, intelligence artificielle.</p>
          </div>
          <div className="cv-item">
            <h4>2022-2023 : Licence en Informatique, CNAM Grand Est, Strasbourg, France.</h4>
          </div>
          <div className="cv-item">
            <h4>2020-2022 : DUT en Informatique avec spécialisation Scientifique, IUT Robert-Schuman, Illkirch-Graffenstaden, France.</h4>
          </div>
        </div>

        <div className="cv-section">
          <h3>Projets Significatifs</h3>
          <div className="cv-item">
            <h4>Mars 2025 : LicencePlateRecognition</h4>
            <p>Application de reconnaissance d'éléments sur plaques d'immatriculation, conçue pour implémenter le machine learning en Python. Projet personnel.</p>
          </div>
          <div className="cv-item">
            <h4>Janvier 2025 : TaxiBrousse</h4>
            <p>Application type Blablacar pour Alcatel-Lucent Enterprise utilisant Android Studio. Projet d'école d'ingénieur.</p>
          </div>
          <div className="cv-item">
            <h4>Novembre 2024 : Projet Shell</h4>
            <p>Reproduction d'un shell en C. Projet d'école d'ingénieur.</p>
          </div>
          <div className="cv-item">
            <h4>Septembre 2024 : WallmartDefense</h4>
            <p>Jeu Tower Defense utilisant les Design Patterns, développé avec Unity. Projet d'école d'ingénieur.</p>
          </div>
          <div className="cv-item">
            <h4>Juin 2024 : CrossyRoad</h4>
            <p>Jeu type Crossy Road utilisant Unity. Projet d'école d'ingénieur.</p>
          </div>
          <div className="cv-item">
            <h4>Mars 2024 : Arkanoid</h4>
            <p>Implémentation du jeu Arkanoid en C avec SDL2. Projet d'école d'ingénieur.</p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Compétences</h3>
          <div className="cv-skills">
            <div>
              <h4>Langages</h4>
              <p>C/C++, C#, Java, Python, PHP, JavaScript, SQL, LaTeX, Shell.</p>
            </div>
            <div>
              <h4>Domaines</h4>
              <p>Traitement d'images, Intelligence Artificielle, BI, POO, TDD.</p>
            </div>
            <div>
              <h4>Langues</h4>
              <p>Français (langue maternelle), Anglais (courant), Allemand (notions scolaires).</p>
            </div>
            <div>
              <h4>Soft Skills</h4>
              <p>Travail d'équipe, Adaptabilité, Flexibilité, Autonomie.</p>
            </div>
          </div>
        </div>

        <div className="cv-section">
          <h3>Expérience Professionnelle</h3>
          <div className="cv-item">
            <h4>Septembre 2022-Présent : Apprenti SI, Safran Landing Systems, Molsheim, France.</h4>
            <p>Développement d'applications, maintenance logicielle, tableaux de bord Power BI, gestion de projets SI.</p>
          </div>
          <div className="cv-item">
            <h4>Avril-Juin 2022 : Stagiaire Développeur, LPB Conseil, Strasbourg, France, 10 semaines.</h4>
            <p>Développement de tableaux de bord Power BI, maintenance d'un logiciel ERP.</p>
          </div>
          <div className="cv-item">
            <h4>Juillet-Août 2018-2021 : Ouvrier d'Entrepôt, Robusta Flex, Bâle.</h4>
            <p>Gestion d'un système de stock Kanban et réalisation de diverses tâches de manutention en équipe.</p>
          </div>
        </div>

        <div className="cv-section">
          <h3>Activités</h3>
          <p>Participation à la "Nuit de l'Informatique" (2021, 2023, 2024), médaille d'or dans un challenge. Participation au AWS GameDay – Frugality Fest (Décembre 2024).</p>
        </div>

        <div className="cv-section">
          <h3>Centres d'Intérêt</h3>
          <div>
            <h4>Loisirs</h4>
            <p>Cinéma, Littérature, Création Numérique.</p>
          </div>
          <div>
            <h4>Sports</h4>
            <p>Musculation, Course à pied.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV