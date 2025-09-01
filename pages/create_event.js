import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function create_event() {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    category: '',
    isPublic: false,
    allowRegistration: true,
    sendNotifications: true,
    maxAttendees: '',
    requirements: [],
    tags: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRequirementChange = (requirement) => {
    setEventData(prevData => {
      if (prevData.requirements.includes(requirement)) {
        return {
          ...prevData,
          requirements: prevData.requirements.filter(req => req !== requirement)
        };
      } else {
        return {
          ...prevData,
          requirements: [...prevData.requirements, requirement]
        };
      }
    });
  };

  const handleTagChange = (tag) => {
    setEventData(prevData => {
      if (prevData.tags.includes(tag)) {
        return {
          ...prevData,
          tags: prevData.tags.filter(t => t !== tag)
        };
      } else {
        return {
          ...prevData,
          tags: [...prevData.tags, tag]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event data:', eventData);
    alert('Event submitted successfully!');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Event</title>
        <meta name="description" content="Create an event" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>Kaigan</Link>
        </div>
      </nav>

      <main className={styles.hero}>
        <form onSubmit={handleSubmit} className={styles.threeColumnForm}>

          {/* Column 1: Basic Information */}
          <div className={styles.column}>
            <br></br>
            <br></br>
            <br></br>
            <h2 className={styles.columnTitle}>Event Setup</h2>
            <h4>Admin account for editing/seeing event</h4>
            <div className={styles.inputGroup}>
              <label htmlFor="date" className={styles.inputLabel}>Admin Username *</label>
              <input type="text" id="title" name="title" value={eventData.title} onChange={handleInputChange} placeholder="Username for event admin" className={styles.textInput} required/>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="time" className={styles.inputLabel}>Admin Password *</label>
              <input type="text" id="title" name="title" value={eventData.title} onChange={handleInputChange} placeholder="Password for event admin" className={styles.textInput} required/>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Event Visibility</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input type="radio" name="isPublic" checked={eventData.inputLabel} onChange={() => setEventData({...eventData, isPublic: true})}/>
                  <span>Public Event</span>
                </label>
                <label className={styles.radioLabel}>
                  <input type="radio" name="isPublic" checked={!eventData.isPublic} onChange={() => setEventData({...eventData, isPublic: false})}/>
                  <span>Private Event</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Column 2: Event Description */}
          <div className={styles.column}>
            <div className={styles.inputGroup}>
              <label htmlFor="title" className={styles.inputLabel}>Event Title *</label>
              <input type="text" id="title" name="title" value={eventData.title} placeholder="Event name" onChange={handleInputChange} className={styles.textInput} required/>
            </div>
            
            <h2 className={styles.columnTitle}>Event Description</h2>
            
            <div className={styles.inputGroup}>
              <label htmlFor="description" className={styles.inputLabel}>Description *</label>
              <textarea id="description" name="description" value={eventData.description} onChange={handleInputChange} className={styles.textInput} rows="10" required placeholder="Enter a description of your event..."></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="location" className={styles.inputLabel}>Location *</label>
              <input type="text" id="location" name="location" value={eventData.location} onChange={handleInputChange} placeholder="Location of event" className={styles.textInput} required/>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="category" className={styles.inputLabel}>Category *</label>
              <select id="category" name="category" value={eventData.category} onChange={handleInputChange} className={styles.selectInput} required>
                <option value="">Select an event</option>
                <option value="conference">Birthday</option>
                <option value="workshop">Wedding</option>
                <option value="meetup">Social Event</option>
                <option value="webinar">Holiday event</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <button type="submit" className={styles.ctaButton}>Create Event</button>
            </div>
          </div>

          {/* Column 3: Settings & Options */}
          <div className={styles.column}>
            <br></br>
            <br></br>
            <br></br>
            <h2 className={styles.columnTitle}>Settings & Options</h2>
            
            <div className={styles.inputGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" name="sendCalenderEvent" checked={eventData.sendCalenderEvent} onChange={handleInputChange}/>
                <span>Calender event</span>
              </label>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" name="sendItemList" checked={eventData.sendItemList} onChange={handleInputChange}/>
                <span>Item List</span>
              </label>
            </div>
          </div>
        </form>
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