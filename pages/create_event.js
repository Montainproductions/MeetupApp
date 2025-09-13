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

  /* Calender */
  const [isCalenderActive, setIsCalenderActive] = useState(false);
  const [isListActive, setIsListActive] = useState(false);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const [calendarMode, setCalendarMode] = useState('specific'); // 'specific' or 'general'
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleCalanderCheckboxChange = () => {
    setIsCalenderActive(!isCalenderActive);
  };

  const handleListCheckboxChange = () => {
    setIsListActive(!isListActive);
  };

  const handleDateSelect = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter(d => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleDaySelect = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  // Generate sample dates for the calendar
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 28; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  /* List */
  const [objectName, setObjectName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  
  const handleAddItem = () => {
    if (objectName.trim() === '') {return};
    
    const newItem = {
      id: Date.now(),
      name: objectName.trim(),
      quantity: quantity
    };
    
    setItems([...items, newItem]);
    setObjectName('');
    setQuantity(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {handleAddItem();}
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
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
            <h2 className={styles.columnTitle}>Calender & Item List</h2>
            
            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={isCalenderActive} onChange={handleCalanderCheckboxChange} className={styles.checkboxInput}/>
              <span>Enable Calender</span>
            </label>

            {isCalenderActive && (
              <div className={styles.scheduleOptions}>
                <h3 className={styles.sectionTitle}>Time period</h3>
                <div className={styles.timeSlots}>
                  <div className={styles.timeInputGroup}>
                    <label className={styles.inputLabel}>Start Time</label>
                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className={styles.timeInput}/>
                  </div>
                  <div className={styles.timeInputGroup}>
                    <label className={styles.inputLabel}>End Time</label>
                    <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className={styles.timeInput}/>
                  </div>
                </div>

                <div className={styles.calendarSection}>
                  <div className={styles.calendarModeSelector}>
                    <button className={`${styles.ctaButton} ${calendarMode === 'specific' ? styles.activeMode : ''}`} onClick={() => setCalendarMode('specific')}>Specific Dates</button>
                    <button className={`${styles.ctaButton} ${calendarMode === 'general' ? styles.activeMode : ''}`} onClick={() => setCalendarMode('general')}>Days of Week</button>
                  </div>
                  {calendarMode === 'specific' && (
                    <div className={styles.dateCalendar}>
                      <h4 className={styles.sectionTitle}>Select Specific Dates</h4>
                      <div className={styles.dateGrid}>
                        {generateDates().map((date, index) => {
                          const dateString = date.toISOString().split('T')[0];
                          const day = date.getDate();
                          const month = date.toLocaleString('default', { month: 'short' });
                          const isSelected = selectedDates.includes(dateString);
                          
                          return (
                            <div key={index} className={`${styles.dateCell} ${isSelected ? styles.selectedDate : ''}`} onClick={() => handleDateSelect(dateString)}>
                              <div className={styles.month}>{month}</div>
                              <div className={styles.day}>{day}</div>
                              <div className={styles.weekday}>{date.toLocaleString('default', { weekday: 'short' })}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {calendarMode === 'general' && (
                    <div className={styles.daySelector}>
                      <h4 className={styles.calendarTitle}>Select Day(0) of the Week</h4>
                      <div className={styles.dayGrid}>
                        {daysOfWeek.map((day, index) => {
                          const isSelected = selectedDays.includes(day);
                          return (
                            <div key={index} className={`${styles.dayCell} ${isSelected ? styles.selectedDay : ''}`} onClick={() => handleDaySelect(day)}>{day.substring(0, 3)}</div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className={styles.selectionSummary}>
                    <h3>Current Selection:</h3>
                    {calendarMode === 'specific' && selectedDates.length > 0 && (<p>Selected Dates: {selectedDates.join(', ')}</p>)}
                    {calendarMode === 'general' && selectedDays.length > 0 && (<p>Selected Days: {selectedDays.join(', ')}</p>)}
                    {(calendarMode === 'specific' && selectedDates.length === 0) ||(calendarMode === 'general' && selectedDays.length === 0) ? (<p>No selection made yet</p>) : null}
                    <p>Time: {startTime} - {endTime}</p>
                  </div>
                </div>
              </div>
            )}

            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={isListActive} onChange={handleListCheckboxChange} className={styles.checkboxInput}/>
              <span>Enable Event Item List</span>
            </label>

            {isListActive && (
              <div className={styles.objectInputContainer}>
                <h3 className={styles.sectionTitle}>Item List</h3>
                <input type="text" value={objectName} onChange={(e) => setObjectName(e.target.value)} onKeyPress={handleKeyPress} placeholder="Enter object name" className={styles.textInput}/>

                <br></br>
                <br></br>
                
                <button onClick={handleDecrement} className={styles.ctaButtonSmall} aria-label="Decrease quantity">- </button>
                <span className={styles.quantityDisplay}> {quantity} </span>
                <button onClick={handleIncrement} className={styles.ctaButtonSmall} aria-label="Increase quantity"> +</button>

                <br></br>
                <br></br>

                <button onClick={handleAddItem} className={styles.addButton}
                  disabled={objectName.trim() === ''}
                  aria-label="Add item to list"
                >
                  <svg className={styles.checkmarkIcon} viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </button>

                <div className={styles.itemsList}>
                  <h2 className={styles.listTitle}>Items List:</h2>
                  {items.length === 0 ? (
                    <div className={styles.emptyState}><p>No items added yet. Start by adding an item above.</p></div>
                  ) : (
                    <ul className={styles.list}>
                      {items.map((item) => (
                        <li key={item.id} className={styles.listItem}>
                          <div className={styles.itemInfo}>
                            <span className={styles.itemName}>{item.name}</span>
                            <span className={styles.itemQuantity}>x{item.quantity}</span>
                          </div>
                          <button onClick={() => removeItem(item.id)} className={styles.deleteButton} aria-label={`Remove ${item.name}`}>
                            <svg viewBox="0 0 24 24" width="18" height="18">
                              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Item list visibility</label>
                  <div>*Allow people to see who is bringing what items</div>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="isPublic" checked={eventData.inputLabel} onChange={() => setEventData({...eventData, isPublic: true})}/>
                      <span>Public List</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="isPublic" checked={!eventData.isPublic} onChange={() => setEventData({...eventData, isPublic: false})}/>
                      <span>Private List</span>
                    </label>
                  </div>
                </div>
                </div>
              </div>
            )}
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