import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Мое портфолио</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="/" className={styles.navButton}>Главная</a></li>
            <li className={styles.navItem}><a href="contact" className={styles.navButton}>Контакты</a></li>
          </ul>
        </nav>
      </header>

      {/* About Me Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <h2>Обо Мне</h2>
          <p>
          Меня зовут Фирдавc Кобилов, я родился 14 сентября 2002 года в Пенджикенте, Республика Таджикистан я еще не женат. Я окончил среднюю школу в 2020 году и поступил в Худжандский государственный университет в этом году на факультет программной инженерии. Во время учебы мой интерес к программированию возрос, и я выбрал путь веб-программирования и закончил его с отличием. В настоящее время я нахожусь в Москве и набираюсь опыта в закупщике. Я старший разработчик с 16-летним стажем и работал над многими проектами. Кроме того, я знаю администрирование Docker и Linux-серверов.
          </p>
        </div>
      </section>

      

      {/* Interests and Goals Section */}
      <section className={styles.interestsSection}>
        <h2>Мои интересы и цели на будущее</h2>
        <p>
        В основном меня интересуют политика, плавание и игра в футбол. В будущем хочу работать старшим программистом в крупной компании.
        </p>
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
