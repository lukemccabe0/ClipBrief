import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>We have converted <b>0</b> videos to summaries! 🔥</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#24292e',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
