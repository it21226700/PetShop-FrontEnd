import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer style={{ backgroundColor: 'rgb(224, 170, 19)', color: '#FFFFFF', padding: '20px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <p style={{ marginBottom: '10px', textAlign: 'center', fontSize: '14px' }}>
          &copy; {new Date().getFullYear()} My Dashboard. All rights reserved.
        </p>
        
        <p style={{ marginBottom: '20px', textAlign: 'center', fontSize: '16px' }}>
          Your go-to solution for managing your pets, products, and customer relationships with ease!
        </p>

        <div style={{ marginBottom: '15px' }}>
          <a href="/privacy-policy" style={{ color: '#495057', margin: '0 20px', textDecoration: 'none', transition: 'color 0.3s' }}>About Us</a>
          <a href="/terms-of-service" style={{ color: '#495057', margin: '0 20px', textDecoration: 'none', transition: 'color 0.3s' }}>Terms of Service</a>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFC107', textDecoration: 'none', transition: 'color 0.3s' }}>
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFC107', textDecoration: 'none', transition: 'color 0.3s' }}>
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFC107', textDecoration: 'none', transition: 'color 0.3s' }}>
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFC107', textDecoration: 'none', transition: 'color 0.3s' }}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}
