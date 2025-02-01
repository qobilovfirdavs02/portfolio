import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Мое портфолио</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/" className={styles.navButton}>Главная</a></li>
            <li className={styles.navItem}><a href="/about" className={styles.navButton}>Обо мне</a></li>
          </ul>
        </nav>
      </header>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>Контактная информация</h2>
        <div className={styles.contactBlock}>
          <div className={styles.contactItem}>
            <h3>Почта</h3>
            <p><a href="mailto:firdavs@example.com" className={styles.contactLink}>firdavskm@outlook.com</a></p>
          </div>
          <div className={styles.contactItem}>
            <h3>Телефон</h3>
            <p><a href="tel:+998901234567" className={styles.contactLink}>+7 (936)299 88 65</a></p>
          </div>
          <div className={styles.contactItem}>
            <h3>GitHub</h3>
            <p><a href="https://github.com/qobilovfirdavs02" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>MyGit</a></p>
          </div>
          <div className={styles.contactItem}>
            <h3>Локация</h3>
            <p>Russian Federation, Moscow</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Свяжитесь со мной</p>
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
          <p className={styles.copyright}>© Все права защищены! Qobilov F.K</p>
        </div>
      </footer>
    </div>
  );
}
