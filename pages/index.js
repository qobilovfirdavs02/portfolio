import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>My Portfolio</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="about" className={styles.navLink}>About</a></li>
            <li className={styles.navItem}><a href="contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <h2>About Me</h2>
        <p>Hello, my name is Firdavs, I am a Junior Programmer, I am glad you are following me.</p>
      </section>

      {/* Image Section */}
      <section className={styles.imageSection}>
        <img src="/20231025_142445.jpg" alt="My Photo" className={styles.image} />
      </section>

      
    <section className={styles.projectsSection}>
  <h2>My Projects</h2>
  <div className={styles.projects}>
    <div className={styles.projectsLeft}>
      {/* Project 1: React */}
      <div className={styles.project}>
        <h3>React Project</h3>
        <p>Built with React and Node.js</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: '90%' }}></div>
        </div>
      </div>

      {/* Project 2: Vue.js */}
      <div className={styles.project}>
        <h3>Vue.js Project</h3>
        <p>Built with Vue.js and Express</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Project 3: Angular */}
      <div className={styles.project}>
        <h3>Angular Project</h3>
        <p>Built with Angular and MongoDB</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: '80%' }}></div>
        </div>
      </div>
    </div>

    {/* Total Projects Circle */}
    <div className={styles.totalProjects}>
      <h3>Total Projects</h3>
    </div>

    <div className={styles.projectsRight}>
      {/* Project 4: Next.js */}
      <div className={styles.project}>
        <h3>Next.js Project</h3>
        <p>Built with Next.js</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: '85%' }}></div>
        </div>
      </div>

      {/* Project 5: Django */}
      <div className={styles.project}>
        <h3>Django Project</h3>
        <p>Built with Django</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: '70%' }}></div>
        </div>
      </div>

      {/* Project 6: Laravel */}
      <div className={styles.project}>
        <h3>Fastapi Project</h3>
        <p>Built with Python</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  </div>
</section>









      {/* Footer */}
      <footer className={styles.footer}>
        <p>Connect with me</p>
        <div className={styles.socialLinks}>
          <a href="https://instagram.com/qobilov.firdavs" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" alt="Instagram" />
          </a>
          <a href="https://youtube.com/@firdavsqobilov" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_icon_%282013-2017%29.png/1024px-YouTube_icon_%282013-2017%29.png" alt="YouTube" />
          </a>
          <a href="https://t.me/firdavs2002" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/452/telegram-app.png" alt="Telegram" />
          </a>
          <p className={styles.copyright}>© All right reserved! Qobilov F.K</p>
        </div>
      </footer>
    </div>
  );
}
