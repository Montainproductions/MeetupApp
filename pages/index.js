import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setMessage(`Event Code submitted: ${inputValue}`);
    } else {
      setMessage('Insert Event Code');
    }
  };

  const handleClear = () => {
    setInputValue('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaigan</title>
        <meta name="description" content="Simplifing event planning!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <a href="/" className={styles.logo}>Kaigan</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Kaigan!</h1>
          <p>Simplify events and items to bring.</p>

          <div className={styles.inputButtonLayout}>
            <div className={styles.buttonWrapper}>
              <a href="/create_event"><button onClick={handleClear} className={styles.ctaButton}>Create Event</button></a>
            </div>

            <div className={styles.inputButtonGroup}>
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter event code here" className={styles.textInput}/>
              <a href="/join_event"><button onClick={handleSubmit} className={styles.ctaButton}>Join Event</button></a>
            </div>
          </div>
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