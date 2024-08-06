import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>We have converted ............ videos to summaries!</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
