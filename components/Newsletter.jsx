import React from 'react'

import NewsletterStyles from '../styles/components/Newsletter.module.scss'
const Newsletter = () => {
  return (
      <div className={NewsletterStyles.newsletter}>
          <div className={NewsletterStyles.container}>
              <div className={NewsletterStyles.header}>
                  <h2>Sign up to our newsletter</h2>
                  <p>We'll let you know when our next sale hits!</p>
              </div>
              <form className={NewsletterStyles.newsletterForm}>
                  <input type="text" name="email" />
                  <button>Sign up</button>
              </form>
          </div>
      </div>
  )
}

export default Newsletter