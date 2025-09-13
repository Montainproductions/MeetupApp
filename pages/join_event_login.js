import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function join_event_login() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Event</title>
                <meta name="description" content="Create an event" />
            </Head>

            <nav className={styles.nav}><div className={styles.navContainer}><Link href="/" className={styles.logo}>Kaigan</Link></div></nav>

            <main className={styles.hero}>
                <div className={styles.inputButtonLayout}>
                    <div className={styles.inputButtonGroup}>
                        <h2 className={styles.columnTitle}>Login Setup</h2>
                        <div className={styles.inputGroup}>
                            <label htmlFor="date" className={styles.inputLabel}>Username *</label>
                            <input type="text" id="title" name="title" placeholder="Username" className={styles.textInput} required/>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="time" className={styles.inputLabel}>Password</label>
                            <input type="text" id="title" name="title" placeholder="Password" className={styles.textInput} required/>
                        </div>
                        <div>No password required. Setting up a password allows to come back later to edit your input.</div>
                    </div>
                </div>
            </main>
        </div>
    );
}