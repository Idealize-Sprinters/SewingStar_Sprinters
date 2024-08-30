import React from 'react';

const HelpDesk2 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.iconContainer}>
          <img
            src="https://via.placeholder.com/24" // Replace with your right icon URL
            alt="Right Icon"
            style={styles.icon}
          />
        </div>
        <h2 style={styles.thankYouMessage}>Thank You for Contacting Us</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F5F5F5',
  },
  box: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  thankYouMessage: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default HelpDesk2;