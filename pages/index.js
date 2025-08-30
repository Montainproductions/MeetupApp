import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Starter Page</title>
        <meta name="description" content="A modern Next.js starter page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="/" className={styles.logo}>Meet Up</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Meet Up!</h1>
          <p>Simplify events and items to bring.</p>
          <a href="#" className={styles.ctaButton}>Create Event +</a>
          <p></p>
          <a href="/join_event" className={styles.ctaButton}>Join Event</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <h3>Donate to MeetUp</h3>
              <div className={styles.socialLinks}>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <h3>Company Info</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2025 MeetUp Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}