import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function join_event() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Join Event</title>
        <meta name="description" content="Join an event" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>Kaigan</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Event Name</h1>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>Our Story</h2>
            <p>Founded in 2023, we are dedicated to creating amazing web experiences using modern technologies like Next.js. Our team of passionate developers strives to build performant, accessible, and beautiful web applications.</p>
            
            <h2>Our Mission</h2>
            <p>To simplify web development while delivering exceptional results for our clients. We believe in the power of open source and contribute back to the community whenever possible.</p>
            
            <h2>Our Values</h2>
            <ul>
              <li>Quality in every line of code</li>
              <li>User experience as a priority</li>
              <li>Continuous learning and improvement</li>
              <li>Transparency in our process</li>
            </ul>
          </div>
          
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-building" style={{fontSize: '5rem', color: '#2563eb'}}></i>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <h3>Donate to Kaigan</h3>
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