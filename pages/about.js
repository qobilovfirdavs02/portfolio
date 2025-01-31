import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1>My Portfolio</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/" className={styles.navButton}>Home</a></li>
            <li className={styles.navItem}><a href="contact" className={styles.navButton}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Me Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p>
          I am Firdav Qobilov, born on September 14, 2002 in Panjakent, Republic of Tajikistan. I graduated from high school in 2020 and entered Khujand State University this year to study Software Engineering. During my studies, my interest in programming grew and I chose the path of Web programming and graduated with honors. I am currently in Moscow and I am gaining experience in the buyer. I am a Senior Developer with 16 years of experience and I have worked on many projects. In addition, I know Docker and Linux server administration.
          </p>
        </div>
      </section>

      

      {/* Interests and Goals Section */}
      <section className={styles.interestsSection}>
        <h2>My Interests & Future Goals</h2>
        <p>
        I am mainly interested in politics and swimming and playing football. In the future, I want to work as a senior programmer in a large company.
        </p>
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
