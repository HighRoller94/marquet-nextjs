import React from 'react'

import FooterStyles from '../styles/components/Footer.module.scss'

const Footer = () => {
  return (
      <div className={FooterStyles.footer}>
        <div className={FooterStyles.container}>
          <span class="footer__divider"></span>
          <svg className={FooterStyles.footerLogo} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 340"><rect width="350" height="340" fill="#000000" /><path d="M225.59,240.57h39.46l49.72,138.11q4.74,13.43,9.28,27t9.27,27h1.58q4.73-13.41,8.88-27t8.88-27l48.93-138.11h39.85V499.43H410.66V357q0-17.36,1.58-38.28T415,280.43h-1.58L392.9,339.22,344,473.38h-21.7L273.34,339.22l-20.52-58.79h-1.58q1.19,17.35,2.57,38.27T255.19,357V499.43h-29.6Z" transform="translate(-155 -200)" fill="#fff" />
          </svg>
          <ul className={FooterStyles.footerOptions}>
            <li>About us</li>
            <li>Customer Service</li>
            <li>Student Discount</li>
            <li>Careers</li>
            <li>Media</li>
          </ul>
          <ul className={FooterStyles.footerSecondaryOptions}>
            <li>Stores</li>
            <li>My account</li>
            <li>Privacy Policy</li>
            <li>Cookie Settings</li>
            <div className={FooterStyles.language}>
              <img src="../assets/footer/uk__flag.svg" alt="" class="language__icon" />
              <li>United Kingdom</li>
            </div>
          </ul>
          <div className={FooterStyles.footerSocials}>
            <h4 class="facebook">Facebook</h4>
            <span class="socials__divider"></span>
            <h4 class="facebook">Instagram</h4>
            <span class="socials__divider"></span>
            <h4 class="facebook">Twitter</h4>
          </div>
          <div className={FooterStyles.copyright}>
            <p>Copyright Marquet</p>
          </div>
        </div>
      </div>
  )
}

export default Footer