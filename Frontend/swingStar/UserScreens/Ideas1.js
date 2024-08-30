import React from 'react';
import { FaHome, FaEnvelope, FaUser, FaShoppingCart, FaArrowLeft, FaTshirt, FaCamera, FaAdjust } from 'react-icons/fa'; // Importing icons from react-icons

const Ideas1 = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.backButton}>
          <FaArrowLeft />
        </button>
      </header>

      <div style={styles.contentContainer}>
        <h1 style={styles.title}>Experience Virtual Dressing</h1>
        <p style={styles.welcomeText}>Welcome to the future of fashion shopping!</p>
        <p style={styles.subText}>Follow these simple steps:</p>

        <ul style={styles.stepsList}>
          <li style={styles.stepItem}>
            <FaTshirt style={styles.icon} />
            <span>Select Your Dress: Explore our wide collection and choose your favorite styles.</span>
          </li>
          <li style={styles.stepItem}>
            <FaCamera style={styles.icon} />
            <span>Virtual Try-On: Use your camera to try on outfits virtually.</span>
          </li>
          <li style={styles.stepItem}>
            <FaAdjust style={styles.icon} />
            <span>Customize Fit: Adjust the size and style to suit your body shape.</span>
          </li>
        </ul>

        <p style={styles.saveText}>Save and share your favorite looks!</p>
      </div>

      {/* Navigation Bar */}
      <div style={styles.navBar}>
        <div style={styles.navItem} onClick={() => alert('Navigate to Home')}>
          <FaHome style={styles.navIcon} />
        </div>
        <div style={styles.navItem} onClick={() => alert('Navigate to Messages')}>
          <FaEnvelope style={styles.navIcon} />
        </div>
        <div style={styles.navItem} onClick={() => alert('Navigate to Profile')}>
          <FaUser style={styles.navIcon} />
        </div>
        <div style={styles.navItem} onClick={() => alert('Navigate to Cart')}>
          <FaShoppingCart style={styles.navIcon} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#F8F8F8',
    padding: '20px',
    borderRadius: '10px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '10px',
  },
  backButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#333',
    cursor: 'pointer',
  },
  contentContainer: {
    textAlign: 'center',
    flex: 1,
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#444',
  },
  welcomeText: {
    margin: '10px 0',
    fontSize: '16px',
    color: '#555',
  },
  subText: {
    fontSize: '14px',
    margin: '10px 0',
    fontWeight: 'bold',
    color: '#777',
  },
  stepsList: {
    listStyleType: 'none',
    padding: '0',
    textAlign: 'left',
  },
  stepItem: {
    marginBottom: '15px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
    color: '#333',
    fontSize: '20px',
  },
  saveText: {
    fontWeight: 'bold',
    margin: '20px 0',
    fontSize: '16px',
    color: '#555',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '15px 0',
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  navItem: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    cursor: 'pointer',
  },
  navIcon: {
    fontSize: '24px',
    color: '#888888',
  },
};

export default Ideas1;