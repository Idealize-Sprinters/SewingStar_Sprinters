import React from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Importing icons


const Phone2 = () => {
  return (
    <div style={styles.container}>
      {/* Main Content */}
      <div style={styles.box}>
        <div style={styles.iconContainer}>
          <MaterialIcons name="check-circle" size={50} color="#4CAF50" style={styles.icon} />
        </div>
        <h2 style={styles.thankYouMessage}>Thank You for Contacting Us</h2>
      </div>

      {/* Navigation Bar */}
      <div style={styles.navBar}>
        <div style={styles.navItem} onClick={() => alert('Navigate to Home')}>
          <FontAwesome name="home" size={24} color="#888888" />
        </div>
        <div style={styles.navItem} onClick={() => alert('Navigate to Messages')}>
          <MaterialIcons name="message" size={24} color="#888888" />
        </div>
        <div style={styles.navItem} onClick={() => alert('Navigate to Profile')}>
          <MaterialIcons name="person" size={24} color="#888888" />
        </div>
        <div style={styles.navItem} onClick={() => alert('Navigate to Cart')}>
          <MaterialIcons name="shopping-cart" size={24} color="#888888" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F5F5F5',
    paddingBottom: '60px', // To accommodate the nav bar
  },
  box: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '300px',
    marginBottom: '20px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    width: '50px',
    height: '50px',
  },
  thankYouMessage: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#fff',
    padding: '10px 0',
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
};

export default Phone2;